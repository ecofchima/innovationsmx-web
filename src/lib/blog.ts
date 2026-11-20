import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Post = CollectionEntry<'blog'>;

async function published() {
  return (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

export async function getPosts(lang: Lang) {
  const all = await published();
  const own = all.filter((p) => p.data.lang === lang);
  // If a language has no posts yet, show the other language's posts.
  if (own.length === 0) return { posts: all, fallback: true };
  return { posts: own, fallback: false };
}

export async function getTranslation(post: Post) {
  if (!post.data.translationKey) return undefined;
  const all = await published();
  return all.find((p) => p.data.translationKey === post.data.translationKey && p.data.lang !== post.data.lang);
}

export async function getRelated(post: Post, n = 2) {
  const all = await published();
  return all.filter((p) => p.data.lang === post.data.lang && p.id !== post.id).slice(0, n);
}

export const getAbout = async (lang: Lang) => getEntry('about', lang)!;

export const postHref = (p: Post) => (p.data.lang === 'en' ? `/en/blog/${p.id}/` : `/blog/${p.id}/`);

export const readingTime = (p: Post) => Math.max(1, Math.round((p.body ?? '').split(/\s+/).length / 200));

export const formatDate = (d: Date, lang: Lang) =>
  d.toLocaleDateString(lang === 'es' ? 'es-MX' : 'en-US', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

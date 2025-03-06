<script lang="ts">
  import { Button, Spinner } from 'flowbite-svelte';
  import { BadgeCheckIcon, UserSearchIcon, EyeIcon } from 'lucide-svelte';
  import { navigating, page } from '$app/stores';
  import { onMount } from 'svelte';
  import SEO from '../../../lib/components/SEO.svelte';
  import Loader from '../../../components/Loader.svelte';
  import {
    BookOpenOutline,
    ClockOutline,
    ArchiveDownloadSolid,
    UsersOutline
  } from 'flowbite-svelte-icons';

  export let data;

  const { journals } = data;
  const journal = journals[0] || {};

  let manu = journal?.initial_man;
  let path = `https://xedepqtbxdmvqbsbsrrd.supabase.co/storage/v1/object/public/journals/public/${manu}`;
  let view = journal?.views;

  const formattedDate = new Date(journal?.created_at).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric'
  });

  let title = journal?.title || "Journal Article";
  let metadescription = journal?.intro || "Read the latest journal articles on various topics.";
</script>

<SEO {title} {metadescription} />

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={metadescription} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={metadescription} />
  <meta property="og:url" content={$page.url.href} />
  <meta property="og:image" content="https://www.precisionchronicles.org/frame2.webp" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ScholarlyArticle",
      "headline": journal?.title,
      "description": journal?.intro,
      "author": { "@type": "Person", "name": journal?.main_author },
      "datePublished": journal?.created_at,
      "articleBody": journal?.intro,
      "image": "https://www.precisionchronicles.com/frame2.webp"
    })}
  </script>
</svelte:head>

<div class="w-[90%] font-poppins mx-auto min-h-screen space-y-10 pb-[5vh]">
  {#if $navigating}
    <Loader />
  {:else}
    <article class="py-20 space-y-8">
      <h1 class="underline uppercase text-3xl font-semibold">{title}</h1>

      <section class="bg-white border shadow-sm rounded-2xl p-6 space-y-6">
        <p class="text-gray-800 font-medium text-xl">Subject Area: {journal?.subject_area}</p>
        <div class="max-w-fit rounded-md py-2 px-4 text-white font-medium"
          class:bg-emerald-500={journal.state === 'published'}
          class:bg-yellow-500={journal.state === 'review'}
          class:bg-red-500={journal.state === 'pending'}>
          {journal.state === 'published' ? 'Published' :
          journal.state === 'review' ? 'On-going Review' : 'Pending'}
        </div>
        <div class="flex items-center space-x-2">
          {#if journal?.enabled}
            <BadgeCheckIcon class="text-blue-500 w-5 h-5" />
          {:else}
            <UserSearchIcon class="w-5 h-5" />
          {/if}
          <span class="font-medium">Author:</span>
          <span>{journal?.main_author}</span>
        </div>
      </section>

      <section class="bg-white border shadow-sm rounded-2xl grid grid-cols-1 lg:grid-cols-2 gap-4 p-6">
        <div class="flex items-center space-x-3">
          <ClockOutline />
          <span>Published:</span>
          <time datetime={journal?.created_at} class="font-semibold">{formattedDate}</time>
        </div>
        <div class="flex items-center space-x-3">
          <UsersOutline />
          <span>Authors:</span>
          <span class="font-semibold">{journal?.total_authors}</span>
        </div>
        <div class="flex items-center space-x-3">
          <EyeIcon />
          <span>Views:</span>
          <span class="font-semibold">{journal?.views}</span>
        </div>
        <div class="flex items-center space-x-3">
          <BookOpenOutline />
          <span>Volume:</span>
          <span class="font-semibold">{journal?.volume}</span>
        </div>
      </section>

      <section class="bg-white border shadow-sm rounded-2xl p-6 space-y-4">
        <h2 class="font-semibold text-xl">Abstract</h2>
        <p class="text-justify leading-relaxed">{journal?.intro}</p>
      </section>

      <a href={path} class="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800"
         aria-label="Download manuscript" rel="noopener">
        Download Manuscript <ArchiveDownloadSolid class="ml-2 w-5 h-5" />
      </a>
    </article>
  {/if}
</div>

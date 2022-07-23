import{_ as t,r,o as n,c as i,a,b as o,F as h,d,e}from"./app.79800446.js";const c={},l=d('<h1 id="frequently-asked-questions" tabindex="-1"><a class="header-anchor" href="#frequently-asked-questions" aria-hidden="true">#</a> Frequently Asked Questions</h1><p>A random collection of frequently asked questions about Isar and Flutter databases.</p><h3 id="why-do-i-need-a-database" tabindex="-1"><a class="header-anchor" href="#why-do-i-need-a-database" aria-hidden="true">#</a> Why do I need a database?</h3><blockquote><p>I store my data in a backend database, why do I need Isar?.</p></blockquote><p>Even today, it is very common to have no data connection, if you are in a subway or in a plane, or if you visit your grandma who has no WiFi and very bad cell signal. You shouldn&#39;t let bad signal cripple your app!</p><h3 id="isar-vs-hive" tabindex="-1"><a class="header-anchor" href="#isar-vs-hive" aria-hidden="true">#</a> Isar vs Hive</h3><p>The answer to this one is easy: do you have structured data or do you want to query your data? Use Isar. For dynamic data or very simple use cases, you can use Hive.</p><h3 id="benchmarks" tabindex="-1"><a class="header-anchor" href="#benchmarks" aria-hidden="true">#</a> Benchmarks</h3><blockquote><p>I saw this one benchmark where database X was faster than Isar.</p></blockquote><p>Database performance is very dependent on the use case. Most benchmarks just dump 10000 records into the database and then read them back. That will almost never happen in real life.<br> Isar is extremely fast and has a few unique tricks to allow you to write much faster queries than with databases that look faster in benchmarks (like composite and multi-entry indexes, FTS etc.).</p><p>Some databases don&#39;t even support asynchronous access and require you to either run all operations in a separate isolate or block your UI isolate.</p><h3 id="where-clauses" tabindex="-1"><a class="header-anchor" href="#where-clauses" aria-hidden="true">#</a> Where clauses?!</h3><blockquote><p>Why do <strong><em>I</em></strong> have to choose which index to use?</p></blockquote><p>There are multiple reasons. Many databases use heuristics to choose the best index for a given query. The database needs to collect additional usage data (-&gt; overhead) might still choose the wrong index. It also makes creating a query slower.</p><p>Nobody knows your data better than you, the developer. So you can choose the optimal index and decide for example whether you want to use an index for querying or sorting.</p><h3 id="do-i-have-to-use-indexes-where-clauses" tabindex="-1"><a class="header-anchor" href="#do-i-have-to-use-indexes-where-clauses" aria-hidden="true">#</a> Do I have to use indexes / where clauses?</h3><p>Nope! Isar is often fast enough if you only rely on filters.</p><h3 id="does-isar-increase-the-size-of-my-app" tabindex="-1"><a class="header-anchor" href="#does-isar-increase-the-size-of-my-app" aria-hidden="true">#</a> Does Isar increase the size of my app?</h3><p>A little bit, yes. Isar will increase the download size of your app about 1 - 1.5 MB. Isar Web only a few KB.</p><h3 id="the-docs-are-incorrect-there-is-a-typo" tabindex="-1"><a class="header-anchor" href="#the-docs-are-incorrect-there-is-a-typo" aria-hidden="true">#</a> The docs are incorrect / there is a typo.</h3>',20),u=e("Oh no, sorry. Please "),p={href:"https://github.com/isar/isar/issues/new/choose",target:"_blank",rel:"noopener noreferrer"},y=e("open an issue"),b=e(" or even better a "),f={href:"https://github.com/isar/docs",target:"_blank",rel:"noopener noreferrer"},m=e("PR"),_=e(" to fix it \u{1F4AA}.");function k(w,v){const s=r("ExternalLinkIcon");return n(),i(h,null,[l,a("p",null,[u,a("a",p,[y,o(s)]),b,a("a",f,[m,o(s)]),_])],64)}var q=t(c,[["render",k],["__file","faq.html.vue"]]);export{q as default};

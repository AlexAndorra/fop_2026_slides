---
theme: default
background: /stadium.png
class: text-center
highlighter: shiki
lineNumbers: false
info: "The Soccer Factor Model: Disentangling true player skill from team context using Bayesian inference. Presented at Field of Play 2026."
title: "Unveiling True Talent - SFM"
description: "The Soccer Factor Model: Disentangling true player skill from team context using Bayesian inference. Presented at Field of Play 2026."
author: "Alexandre Andorra"
image: "https://alexandorra.github.io/fop_2026_slides/stadium.png"
favicon: "/stadium.png"
drawings:
  persist: false
transition: slide-up
mdc: true
colorSchema: dark
fonts:
  sans: 'Montserrat, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif'
  serif: 'ui-serif, Georgia, Cambria, Times New Roman, Times, serif'
  mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace'
---

# <span class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-indigo-500 font-bold">Unveiling True Talent</span>
## The Soccer Factor Model for Skill Evaluation

<div class="pt-12">
  <span class="text-xl">Alexandre Andorra & Maximilian Göbel</span>
</div>

<div class="pt-6 font-light text-gray-400">
  Field of Play 2026 · Manchester
</div>


<!--
I'm Alex Andorra — data scientist, host of the Learning Bayesian Statistics podcast, and co-creator of the Soccer Factor Model with Max Göbel.

Today I want to talk about a problem we've all faced: how do you measure a player's true skill when everything we observe is tangled up with team effects? And more importantly, how do you communicate that to decision makers who don't think in technical terms?

This talk is based on our paper, Unveiling True Talent, and the live platform we've built at soccerfactormodel.com
-->

---
transition: fade-out
class: overflow-y-auto
---

# The Problem: Observed Stats are Misleading

<div class="grid grid-cols-2 gap-8 pt-8">
  <div class="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
    <h3 class="text-emerald-400">Scenario A</h3>
    <p class="text-xl mt-4">A striker scores <span class="text-white font-bold">20 goals</span> at Man City.</p>
  </div>
  <div class="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
    <h3 class="text-indigo-400">Scenario B</h3>
    <p class="text-xl mt-4">Another scores <span class="text-white font-bold">12 goals</span> at Nottingham Forest.</p>
  </div>
</div>

<div class="text-center mt-12 text-2xl font-bold">
  Who is actually more skilled?
</div>

<v-click>
<div class="mt-8 text-center text-gray-300">
  Raw stats conflate individual skill with team strength, system, and opportunity.
</div>

<div class="mt-8 bg-red-900/20 text-red-200 p-4 rounded border border-red-900/50 text-center">
  Transfer fees routinely exceed €50M. A wrong signing can cost a club years. Decision makers need clarity, not just data.
</div>
</v-click>

<!--
So here's the setup. A striker at Man City scores 20 goals. Another at Nottingham Forest scores 12. On paper, the City striker looks better. But how much of those 20 goals is actual skill, and how much is just being on a dominant team that creates endless chances?

This is the core problem. Observed performance is a convolution — a mix — of individual skill and team strength. And when clubs are making transfer decisions worth tens of millions, getting this wrong is expensive. 

The question we set out to answer: can we build something rigorous enough to actually separate skill from context, but intuitive enough that a technical director who doesn't speak Bayesian can still use it?
-->

---
transition: slide-up
---

# The Intuition: Think Like an Investor

<div class="grid grid-cols-2 gap-10 pt-8">
<div>
  <h3 class="text-2xl font-bold text-gray-200 border-b border-gray-700 pb-2">Asset Pricing</h3>
  <div class="mt-6 font-mono text-sm bg-gray-900 p-4 rounded">
    Fund return = <span class="text-emerald-400">α (manager skill)</span> + <span class="text-indigo-400">β × market factors</span>
  </div>
  <p class="mt-4 text-gray-400">
    <b>Alpha (α)</b> measures manager skill after stripping out market-wide movements.
  </p>
</div>

<v-click>
<div>
  <h3 class="text-2xl font-bold text-gray-200 border-b border-gray-700 pb-2">Soccer Factor Model</h3>
  <div class="mt-6 font-mono text-sm bg-gray-900 p-4 rounded">
    Goals scored = <span class="text-emerald-400">α (player skill)</span> + <span class="text-indigo-400">β × team/opp factors</span>
  </div>
  <p class="mt-4 text-gray-400">
    <b>Alpha (α)</b> measures player skill after controlling for team strength differential.
  </p>
</div>
</v-click>
</div>

<v-click>
<div class="mt-12 bg-indigo-900/20 border-l-4 border-indigo-500 p-6 text-lg text-indigo-100 italic">
  "Just as alpha separates stock-picking skill from market beta, the SFM separates a player's intrinsic scoring ability from their team context."
</div>
</v-click>

<!--
The SFM is directly inspired by financial asset pricing. In finance, when you want to evaluate a fund manager, you don't just look at raw returns. You decompose returns into alpha — the manager's skill — and beta times market factors. The market went up 20%, your fund went up 22%? Your alpha is roughly 2%.

We do the exact same thing for football. A player's observed goals are decomposed into alpha — their intrinsic skill — and beta times a set of factors that capture the team strength differential. Things like: how good is the team relative to the opponent? Are they playing at home? What's the opponent's defensive record?

What's left after you account for all of that is the player's true skill. Their alpha. And crucially, because this is Bayesian, we don't just get a point estimate — we get a full posterior distribution with uncertainty intervals. So we can say not just 'this player is good' but 'we're 95% confident their skill falls in this range.'

This analogy has actually been really useful when talking to non-technical people — everyone gets the idea of 'separating skill from luck' in investing."
-->

---
transition: slide-left
---

# How the SFM Works (Under the Hood)

<div class="text-center font-mono text-2xl py-8 text-indigo-300">
  P( goals = n | <span class="text-emerald-400">α</span>, <span class="text-cyan-400">X</span> ) = g( <span class="text-emerald-400">α</span>, <span class="text-cyan-400">X</span> | θ )
</div>

<div class="grid grid-cols-3 gap-6">
  <div v-click class="bg-gray-800 p-5 rounded-lg border-t-4 border-emerald-500">
    <h3 class="text-xl font-bold text-emerald-400 mb-2">Skill (α)</h3>
    <p class="text-sm text-gray-300">
      Player-specific intercept modeled as a <b>Gaussian Process</b>. This allows a player's intrinsic skill to evolve smoothly across and within seasons.
    </p>
  </div>
  
  <div v-click class="bg-gray-800 p-5 rounded-lg border-t-4 border-cyan-500">
    <h3 class="text-xl font-bold text-cyan-400 mb-2">Factors (X)</h3>
    <p class="text-sm text-gray-300">
      Team strength proxies: points differential, opponent defensive rank, home advantage, player momentum, and playing position.
    </p>
  </div>
  
  <div v-click class="bg-gray-800 p-5 rounded-lg border-t-4 border-indigo-500">
    <h3 class="text-xl font-bold text-indigo-400 mb-2">Bayesian Engine</h3>
    <p class="text-sm text-gray-300">
      Full posterior inference via MCMC. This is vital because it delivers <b>uncertainty intervals</b> for every estimate, not just static point predictions.
    </p>
  </div>
</div>

<!--
Here's the model in a nutshell. We're predicting P of goals equals n, given alpha and X. Three key pieces:

First, SKILL — alpha. This is a player-specific intercept, but it's not static. We model it as a Gaussian Process over time using Hilbert-Space approximations, so a player's skill can evolve both across seasons and within a season. Messi at 25 is not the same as Messi at 37.

Second, FACTORS — X. These are our team-strength proxies. Points differential between the player's team and the opponent, the opponent's defensive ranking, home advantage, the player's recent scoring momentum, and position. We ran extensive ablation studies — which I'll touch on — to find the right factor specification.

Third, the BAYESIAN ENGINE. Everything is estimated via MCMC. This means we get full posterior distributions, not just point estimates. We can tell a sporting director: 'This player's expected goals per game is 0.35, with a 95% credible interval of 0.22 to 0.49.' That uncertainty quantification is what separates this from a simple xG model.

The model outputs probabilities for each goal count: 0, 1, 2, 3+. So it's a full predictive distribution for each player-match combination.
-->

---
class: text-center h-full flex flex-col justify-center relative
---

<img src="/dembele.png" class="absolute inset-0 w-full h-full object-cover z-0 opacity-80" />

<div class="relative z-10 p-8">
  <h1 class="text-white drop-shadow-lg">Data & Scale</h1>

  <h2 class="text-3xl mt-6 font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-indigo-500 bg-black/60 inline-block px-6 py-3 rounded-lg border border-gray-700 backdrop-blur-sm">2,850+ Players | 42,000+ Appearances | 24 Seasons</h2>

  <div class="text-center mt-8 text-gray-200 bg-black/60 p-4 rounded-lg border border-gray-700 max-w-2xl mx-auto backdrop-blur-sm">
    Premier League · La Liga · Serie A · Bundesliga · Ligue 1 · Champions League (2000–2024). Web-scraped and compiled match-by-match.
  </div>
</div>

<!--
A quick overview of the data. We've web-scraped and compiled a novel dataset: 2,850+ players, over 42,000 player appearances, across 24 seasons of the top 5 European leagues plus the Champions League.

The original paper focused on 144 marquee players — Messi, Ronaldo, Haaland, Mbappe — to validate the methodology. But the live production model now covers the full breadth of players in these leagues.

We're currently focused on strikers and attacking players. That's deliberate — this is the position where individual skill attribution is most impactful and where the scoring signal is clearest. Extending to midfielders and defenders involves different target variables, which is future work.

All data is publicly available and web-scraped. No proprietary tracking data needed — which is actually a feature, not a bug. It means any club can replicate and extend this.
-->

---

# SAR & PAR: Measuring True Talent

We adapted concepts from baseball to create intuitive metrics for football decision-makers:

<div class="grid grid-cols-2 gap-8 mt-6">
  <div class="bg-emerald-900/80 p-6 rounded-xl border border-emerald-500 shadow-2xl backdrop-blur-sm">
    <h3 class="text-emerald-300 font-bold text-2xl mb-2">SAR — Skill Above Replacement</h3>
    <p class="text-sm text-gray-200">Expected goals/game based <b>purely on the player's intrinsic skill (α)</b> — completely independent of their team context.</p>
  </div>
  
  <div class="bg-indigo-900/80 p-6 rounded-xl border border-indigo-500 shadow-2xl backdrop-blur-sm">
    <h3 class="text-indigo-300 font-bold text-2xl mb-2">PAR — Performance Above Replacement</h3>
    <p class="text-sm text-gray-200">Expected goals/game accounting for <b>both</b> their individual skill and their team's strength factors.</p>
  </div>
</div>

<v-click>
<div class="mt-8 text-center bg-gray-800 p-4 rounded-lg font-mono">
  If <span class="text-emerald-400 font-bold">SAR</span> > <span class="text-indigo-400 font-bold">PAR</span> → The player is undervalued.
  <br/><span class="text-sm text-gray-400">The team is actively dragging down their output.</span>
</div>
</v-click>

<!--
This is where the model gets really actionable. We introduce two metrics adapted from baseball's Wins Above Replacement.

SAR — Skill Above Replacement — measures expected goals per game based purely on alpha, the player's intrinsic skill, relative to a replacement-level player. This is the 'if you stripped away all team effects' number.

PAR — Performance Above Replacement — includes both skill and team factors. This is what the model actually predicts given the full picture.

The magic is in comparing them. When SAR is greater than PAR, the player is being held back by their team context. Their skill exceeds their output. That's a buy signal for scouts.

And here's the communication insight for this conference: when I explain SAR vs PAR to a sporting director, I say 'SAR is what the player is worth. PAR is what they've shown you so far. If SAR is higher, they're a bargain.' That analogy lands every time.
-->

---

# Validation: SAR Leaders

Does the model pass the eye test? (Top 6 out of 2,850 players in the dataset)

<img src="/sar_forest_plot.png" class="w-full max-h-80 object-contain mt-4 rounded-lg shadow-xl mx-auto" />

<div class="mt-2 text-gray-400 text-sm italic text-center">
  Note how wide Haaland and Mbappé's confidence intervals are compared to Messi and Ronaldo, reflecting shorter career histories.
</div>

<!--
Before you trust a model to find hidden gems, it has to accurately identify the obvious ones. The model passes this sanity check with flying colors.

What's really fascinating here isn't just the rankings, but the 95% confidence intervals. Look at Messi and Ronaldo—the model is incredibly certain of their skill because it has over a decade of data. Look at Haaland and Mbappé—the point estimates are massive, but the uncertainty bounds are much wider. That's the Bayesian framework doing its job.

As a sporting director, this distinction between an established high-floor asset and a high-variance asset is critical context that a simple point prediction hides.
-->

---

# Does It Actually Work?

Out-of-sample predictive performance on upcoming matches:

<div class="grid grid-cols-3 gap-4 text-center mt-4 mb-6">
  <div class="bg-gray-800 flex flex-col justify-center items-center py-4 rounded border border-gray-700">
    <span class="text-3xl font-bold text-emerald-400">15.2%</span>
    <span class="text-xs mt-1 text-gray-300">Better predictions than a player's historical average</span>
  </div>
  <div class="bg-gray-800 flex flex-col justify-center items-center py-4 rounded border border-gray-700">
    <span class="text-3xl font-bold text-cyan-400">2.5×</span>
    <span class="text-xs mt-1 text-gray-300">Lift: Top prediction decile vs Bottom decile</span>
  </div>
  <div class="bg-gray-800 flex flex-col justify-center items-center py-4 rounded border border-gray-700">
    <span class="text-3xl font-bold text-indigo-400">0.278</span>
    <span class="text-xs mt-1 text-gray-300">Best Brier Score across model variants</span>
  </div>
</div>

<div class="grid grid-cols-2 gap-8">
  <div>
    <h4 class="font-bold mb-2 text-gray-200 border-b border-gray-700 pb-1">Improvement vs Naive Baseline</h4>
    <ul class="text-sm text-gray-300 space-y-1">
      <li><span class="inline-block w-40 font-mono">Champions League</span> <span class="text-green-400">+23.7%</span></li>
      <li><span class="inline-block w-40 font-mono">La Liga</span> <span class="text-green-400">+20.9%</span></li>
      <li><span class="inline-block w-40 font-mono">Ligue 1</span> <span class="text-green-400">+18.4%</span></li>
      <li><span class="inline-block w-40 font-mono">Serie A</span> <span class="text-green-400">+17.2%</span></li>
      <li><span class="inline-block w-40 font-mono">Premier League</span> <span class="text-green-400">+11.9%</span></li>
      <li><span class="inline-block w-40 font-mono">Bundesliga</span> <span class="text-green-400">+11.9%</span></li>
    </ul>
  </div>
  <div class="flex items-center text-gray-400 text-sm italic">
    The model thrives particularly in high-variance, lower-information environments like the Champions League.
  </div>
</div>

<!--
So it looks right, but does it predict well? Yes. We tested this rigorously out-of-sample.

On held-out test data — over 42,000 player appearances the model has never seen — the SFM is over 15% more accurate at predicting future goals than a baseline that uses each player's historical Poisson scoring rate, which is actually a pretty decent benchmark.

The 2.5x lift is telling: players ranked in the top decile by our predictions score 27.5% of the time, versus 11% for the bottom decile. The model genuinely discriminates between players who will score and those who won't.

Across leagues, the improvement is consistent — strongest in the Champions League at 23.1%, which makes sense because that's where team-strength differentials matter most.

That's also because domestic matchups have a ton of historical data. In European competition, teams cross borders and face opponents they rarely play. In those high-uncertainty environments, having a robust model that understands underlying strength differentials is a massive structural advantage.
-->

---

# What Matters Most: Lessons from 19 Models

We conducted a systematic ablation study testing factor combinations. Here is what we learned actually moves the needle:

<v-clicks>

<div class="mt-6 flex gap-4 items-start">
  <div class="bg-emerald-900 text-emerald-300 rounded-full w-8 h-8 flex items-center justify-center shrink-0">1</div>
  <div>
    <h4 class="font-bold text-gray-200">Player-specific momentum is the biggest lever</h4>
    <p class="text-sm text-gray-400 mt-1">Provided a massive ~900 log-likelihood improvement over pooled models. Crucially, <i>not all players respond equally to being on a hot streak.</i> Some are streaky; some are metronomic.</p>
  </div>
</div>

<div class="mt-4 flex gap-4 items-start">
  <div class="bg-cyan-900 text-cyan-300 rounded-full w-8 h-8 flex items-center justify-center shrink-0">2</div>
  <div>
    <h4 class="font-bold text-gray-200">Sparse beats kitchen-sink</h4>
    <p class="text-sm text-gray-400 mt-1">Models with fewer, stronger factors (points differential + positions + momentum + opponent strength) matched full-factor accuracy but better differentiated player skill levels.</p>
  </div>
</div>

<div class="mt-4 flex gap-4 items-start">
  <div class="bg-indigo-900 text-indigo-300 rounded-full w-8 h-8 flex items-center justify-center shrink-0">3</div>
  <div>
    <h4 class="font-bold text-gray-200">Opponent defensive rank > simple goal appeal</h4>
    <p class="text-sm text-gray-400 mt-1">How structurally porous an opponent is matters much more than how high-scoring a fixture looks on paper.</p>
  </div>
</div>

</v-clicks>

<!--
We didn't just build one model, we built and tested 19 variants to see what features actually drive goalscoring.

Our biggest takeaway? Momentum is incredibly player-specific. The assumption that everyone gets a boost from a hot streak is false. Some players are incredibly streaky, others just regress to their mean immediately. Allowing the model to learn individual momentum sensitivities was our biggest performance leap.

Second, less is more. Sparse models using just points differential, positions, momentum, and opponent strength matched the accuracy of kitchen-sink models with 9+ factors. But crucially, the sparse models were better at differentiating players — higher SAR dispersion. Adding more factors just adds noise.

Fourth, opponent defensive rank beats the 'goal appeal' metric. How many goals the opponent concedes is more informative than how many goals both teams typically score. Concrete > abstract.

The communication lesson here? When presenting model choices to stakeholders, I've learned to frame it as 'we tested 19 versions and here's what actually moves the needle.' That builds confidence even among people who can't evaluate the statistics directly.
-->

---
transition: slide-up
---

# Lessons in Communicating Complexity

When taking complex models to non-technical stakeholders in football:

<div class="space-y-6 mt-8">

<div class="border-l-4 border-emerald-500 pl-4">
  <h3 class="text-lg font-bold text-emerald-400">01. Lead with the analogy, not the equation</h3>
  <p class="text-gray-300 text-sm mt-1">Saying "Think like an investor evaluating a fund manager" opens doors that explaining Bayesian posteriors closes.</p>
</div>

<div class="border-l-4 border-teal-500 pl-4" v-click>
  <h3 class="text-lg font-bold text-teal-400">02. Show uncertainty as a feature, not a weakness</h3>
  <p class="text-gray-300 text-sm mt-1">Confidence intervals aren't hedging. They tell the decision maker what is a safe structural bet versus a high-variance gamble.</p>
</div>

<div class="border-l-4 border-cyan-500 pl-4" v-click>
  <h3 class="text-lg font-bold text-cyan-400">03. Make the output actionable directly</h3>
  <p class="text-gray-300 text-sm mt-1">SAR > PAR translates immediately to "this player is a bargain waiting to happen." That's a sentence a sporting director can act on.</p>
</div>

<div class="border-l-4 border-indigo-500 pl-4" v-click>
  <h3 class="text-lg font-bold text-indigo-400">04. Validate publicly</h3>
  <p class="text-gray-300 text-sm mt-1">We put the model online at soccerfactormodel.com. Letting people stress-test the data themselves builds institutional trust faster than any whitepaper.</p>
</div>

</div>

<!--
Stepping back, what did we learn about bridging the gap between data science and football operations?

First: lead with the analogy. When I say 'think like an investor evaluating a fund manager,' people immediately get it. The equation comes later, if at all. The analogy is the bridge.

Second, lean into uncertainty. When you frame it as 'here's the range of outcomes, and here's where the safe bets are versus the gambles,' decision makers love it. It matches how they already think about risk. Credible intervals become a conversation about risk appetite, not statistical jargon.

Third: make the output a sentence, not a number. 'SAR greater than PAR means this player is a bargain' — that's something a Director of football can act on.

And finally, the best way to prove a model isn't with a great formula, it's by letting them play with it on a dashboard to see if it matches their domain expertise. That's why we didn't just write a paper. We built a live platform.

At soccerfactormodel.com, you can see scoring probabilities for every upcoming fixture. There's a leaderboard ranking players by predicted goals. The SAR/PAR page lets you compare any players on pure skill versus team-assisted performance.

All of this is about communicating complex statistical output in a way that drives decisions. The paper is the rigor. The website is the interface.
-->

---
layout: center
class: text-center
---

# <span class="bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-indigo-500 font-bold">Thank You</span>

<div class="grid grid-cols-4 gap-6 mt-12 w-full max-w-4xl mx-auto">
  <div class="flex flex-col items-center">
    <div class="bg-white p-2 rounded-xl shadow-lg border-2 border-emerald-500 hover:border-emerald-300 transition">
      <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://arxiv.org/abs/2412.05911" class="w-32 h-32" />
    </div>
    <span class="mt-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-400">Paper</span>
  </div>
  <div class="flex flex-col items-center">
    <div class="bg-white p-2 rounded-xl shadow-lg border-2 border-teal-500 hover:border-teal-300 transition">
      <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.soccerfactormodel.com" class="w-32 h-32" />
    </div>
    <span class="mt-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-300">Platform</span>
  </div>
  <div class="flex flex-col items-center">
    <div class="bg-white p-2 rounded-xl shadow-lg border-2 border-cyan-500 hover:border-cyan-300 transition">
      <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://learnbayesstats.com" class="w-32 h-32" />
    </div>
    <span class="mt-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-cyan-400">Podcast</span>
  </div>
  <div class="flex flex-col items-center">
    <div class="bg-white p-2 rounded-xl shadow-lg border-2 border-blue-500 hover:border-blue-300 transition">
      <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://alexandorra.github.io" class="w-32 h-32" />
    </div>
    <span class="mt-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">Contact</span>
  </div>
</div>

<div class="mt-12 text-gray-500">
  Alexandre Andorra & Maximilian Göbel
</div>

<!--
The meta-lesson: rigor and accessibility aren't opposed. You can have a fully Bayesian model with MCMC inference and Gaussian Processes AND communicate it in a way that drives real decisions. That's the balance I think our industry needs.

You can scan these QR codes for access to the full paper, the live platform at soccerfactormodel.com, my podcast if you want to hear more about Bayesian stats in sports, and my website if you need consulting, workshops or just wanna chat.

And of course, I'll be around during the breaks if anyone wants to dig deeper!
Thanks a lot for your time, and to the whole Field of Play team for their invitation! I’m happy to take any questions now
-->

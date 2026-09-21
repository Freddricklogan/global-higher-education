# Case Study — Global Higher Education & Internationalization

**Repository:** [global-higher-education](https://github.com/Freddricklogan/global-higher-education) · **Live demo:** [freddricklogan.github.io/global-higher-education](https://freddricklogan.github.io/global-higher-education/) · **Author:** Freddrick Logan

---

## 1. Who has this problem

Senior international officers and their provosts, deans asked to sign a partnership agreement, graduate students in comparative higher education, and the consultants — I am one, having worked in educational technology at a university with a large international enrollment — asked whether an institution's internationalization is a strategy or a list. Most people at that table know one lever well; few have been shown the levers, rationales, the other side's system and the ethics together.

## 2. The problem, as a scenario

A provost is offered a branch campus by a host government, a franchising deal by a private college, and a ranking consultant's plan to lift research citations. The international office recommends all three; each is a "strategic priority." Which rationale is driving this — academic, economic, political or socio-cultural — and what does that rationale cost? What does the host country's degree structure and quality regime require? What would the ranking formula actually push the institution to do? Who, in the flow of students and prestige, sets the terms and who supplies the data? The office has a list of opportunities; the provost has no way to weigh them.

## 3. What it costs to leave it alone

A branch campus that closes when the host's politics shift; a franchised programme whose quality drift reaches the accreditor before the provost; a partnership that extracts students from a poorer country and calls it exchange. I will not put a figure on it — capital at risk in transnational education varies by orders of magnitude. What is certain is that each failure is documented in the literature the resource draws on, and the questions that prevent them can be taught.

## 4. The approach, and the alternative I rejected

I wrote a seventeen-section resource that treats internationalization as choices with trade-offs. It starts from Knight's definition and the four rationales, then sets the levers of comprehensive internationalization in an explorer that pairs each with its benefits and the challenges leaders must manage. It follows mobility and services across the lifecycle, reads comparative systems and Bologna in depth, and opens up what ARWU, Times Higher Education and QS reward. A transnational-education selector weighs branch campuses, franchising, joint degrees and online provision. Virtual exchange is presented as an equity strategy, the partnership lifecycle runs from scoping to a deliberate sunset, and the decolonizing critique after Altbach and de Wit is confronted directly. A self-check after Hudzik closes it by asking the reader to score their own institution. General patterns are labelled as patterns; the page invents no statistics. The resource then joined the shared Learning Resource Kit: Executive Shell, collapsible sections with saved progress, a five-question quiz written from this content that records xAPI statements locally, and a print layout.

The alternative I rejected was a country-by-country handbook. Those date within a year; the levers, rationales and asymmetries persist while the countries change.

## 5. What the code does today

Real: the authored content across seventeen sections with an executive summary and a glossary of scholars; four working widgets — strategy explorer, rankings explorer, TNE selector, comprehensive-internationalization self-check — moved from inline script to a module without rewriting; the kit layer with progress, quiz, xAPI 1.0.3 statements and print; a strict content-security policy with no inline script or style; tests that validate the quiz configuration and mount the kit against the real page. The conversion also resolved a duplicate `mobility` id.

Simulated: nothing; but the comparative-systems and mobility sections deliberately give structural generalisations rather than figures, and say so.

Worth knowing: the self-check's weights are a pedagogical device; reading time is words at 230 per minute; progress counts a section as opened, not read.

## 6. Evidence

Measured locally with the commands CI runs: 7 tests passing across two files — quiz validity, page invariants, and the vendored kit mounted on this page; coverage 79.84% of all files with `src/config.js` at 100% and the vendored kit at 78.75% from this page's smoke test; ESLint and html-validate clean. The conversion audit records 58 inline style attributes replaced by 15 classes, 26 custom properties namespaced, 9 buttons typed, 3 tables given a body and a `<main>` landmark added. Headless Chrome on the converted page: zero console errors; the sixth lever tab activates virtual exchange, the third ranking tab activates QS, the third TNE option renders joint and double degrees, three self-check elements score 41% Developing; Expand all opens 17 of 17 sections and the KPI strip follows; no horizontal scroll at 1280 or 400 pixels.

## 7. What it would take to run this in production

As a public resource it is in production now. For a professional-development programme it needs the kit's statements sent to the institution's learning record store — endpoint, credentials, consent notice, identified actor, one origin in the content-security policy — and a second reader for the questions if it counts toward a credential. Days of integration; the content does not change.

## 8. Limits and next steps

No figures by design, so no data exhibits; three rankings and four TNE models; a self-check without export; funding programmes described conceptually. Next: an optional data appendix with sourced, dated mobility figures, a partnership due-diligence checklist that exports, a regional-systems appendix beyond Europe and Asia, and per-section questions in place of one quiz at the end.

## 9. Who should look at this

**Hiring manager:** evidence that I can frame an international strategy as choices with trade-offs and ethics, and package the teaching to a standard an institution can adopt.
**Consulting client:** the questions I put to a proposed branch campus, franchise or partnership before any figure is discussed.
**Engineer:** read `src/page.js` for four small state widgets sharing one page, and `tests/kit.test.js` for the kit mounted against this page's real markup.

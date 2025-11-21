---
permalink: /subpages/ai
title: "Open Source AI"
author_profile: true
---

## Open Source AI
*The current state of AI, and how Deepseek is different*

Throughout 2024, AI primarily remained closed source, and big tech was making increasingly aggressive moves to secure its investments and dominate the industry. The industry ecosystem was primarily composed of three layers, with smaller AI startups leading the charge, tech giants -- primarily Microsoft, Google, and Amazon -- investing billions and performing the majority of computation, and, finally, a small, open source group of investors and platforms that lag far behind. On the surface, it may appear as though the prominence of smaller startups points to competitive diversity within the artificial intelligence industry, but one event in November of 2023 year demonstrated how this is not true \[Make No Mistake...\]. 

In late November, Sam Altman, who remains at the helm as OpenAI's CEO today, was fired by the board and then rehired a few days later. His removal followed from an inherent fission in the company, one that began all the way back in 2019. One year prior, Elon Musk, a prominent backer of the startup, quit the board and stopped his funding. At this point, the company broke away from its non-profit, independent, ideal-focused roots -- at least in part -- and established a for-profit wing that was open to investment. ... Continue to explain how big tech has a strangle-hold on the startups \[NPR article\]. 

The trajectory of the industry seemed to point directly to further consolidation of power by the few big players all the way until the very last month of 2024. It was at this point that DeepSeek released its v3 model and changed the playing field in several profound ways. Of course, it showed that US dominance in the artificial intelligence industry was no longer guaranteed, and DeepSeek's model was trained on approximately one eighth of the computing resources for Chat-GPT, which challenged the notion that only big tech owned the computational resources necessary to participate in new model development. But, perhaps the most significant part of DeepSeek's disruption was the fact that it is open weight \[NYT article\].

While there is significant overlap between software development and machine learning, the two fields are different enough that what it means to be open source is not well-defined for the latter. Because building a model requires, at the end of the day, a significant amount of money for training, making the training source code available does not have the same benefits of possible free contribution and community development that software engineering does. 

> “Because it’s a black box, even if I tell you that LLaMa 2, or GPT-4 for that matter, has a problem with hallucinating, even in a narrow domain, it’s not obvious,” says Bommasani, a professor at Stanford. “I can’t go to line 43 of the code and change something and it’s fixed. First of all, the intervention might require retraining the model, which is much more capital intensive than going to fix some lines of code” [Goth 13]. 

Thus, models may be open source to various degrees. A fully open source model leaves source code, training datasets, model architecture, and the trained model open to the public, so that the specific methods used to produce that model can be reproduced and examined. An open weight model provides its trained parameters but not the steps nor data that were used to produce those parameters, and this is how DeepSeek is distributed. Specifically, DeepSeek typically uses a licence published by MIT, which is extremely permissive and includes the permission to sell the model [https://github.com/deepseek-ai/DeepSeek-Coder/blob/main/LICENSE-CODE]. 

*Is open source AI realistic?*

G. Goth, “Can Artificial Intelligence be Open Sourced?,” Communications of the ACM, vol. 67, issue 8, pp. 11-13, 2024.

*Is open source AI dangerous?*

D. Harris, “Open-Source AI is Uniquely Dangerous,” IEEE Spectrum, Jan 12, 2024.

*Analysis of open weighted vs open source AI, the openness of AI libraries, academic research*

Will mostly use personal experience for this and find sources as necessary

Transition: Consumers vs Developers
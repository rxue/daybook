# How to Use a Bug Tracker
3 things to convey in a good bug report:
* How to reproduce the bug, as precisely as possible, and how often this will make the bug appear
* What should have happened, at least in your opinion
* What actually happened, or at least as much information as you have recorded

> A bug with plenty of context to make it easier to reproduce earns the respect of everyone, even if it stops a release

# Keep the Build Clean
> If I leave the warnings, someone else will have to wade through what is relevant and what is not
# Know Your Next Commit
One commit per task
# The Road to Performance is littered with *Dirty Code Bombs*
terms:
* *execution hot spot*
* *fan-out* - number of classes referenced either directly or indirectly from a class of interest
* *fan-in* - count of all classes that depend upon the class of interest.

`I = fo/(fi + fo))`


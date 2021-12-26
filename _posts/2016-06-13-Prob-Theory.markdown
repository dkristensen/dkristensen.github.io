---
layout: project
title:  "Probability Theory and Bayesian Networks"
date:   2016-06-13 10:51:47 +0530
categories: jekyll update
img: prob_theory.png
slides: ../../../../../resources/Math375/Bayesian_Network_Presentation.pdf
paper: ../../../../../resources/Math375/Bayesian_Networks_and_Probabilistic_Inference.pdf
categories: [school,projects]
---

A Bayesian Network (BN) is a probabilistic model which can be used to model beliefs about a system in order to compute probabilities for outcomes given the environment. These are represented via a directed acyclic graph (DAG) which related all the observed variables to the variables we wish to sample via a network of nodes and edges, where each node has certain conditional probabilities associated with it in order to model realistic situations. Dynamic Bayesian Networks (DBN) are a class of Bayesian Networks in which the observed variables at a given time can take into account the expected outcomes from the previous time slice or time slices. One example of a DBN is a Hidden Markov Model, an extension of the Markov chain with both emission and transition probabilities. This paper focuses on why inference methods work and provides an example of how to run through the processes.


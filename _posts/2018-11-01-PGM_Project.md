---
layout: project
title: Probabilistic Graphical Models Final Project
img: Capstone.png
paper: ../../../../../resources/IFT6269/PGM_project.pdf
---

# Introduction
 
Electroencephalography (EEG) is a widely used method to capture the electrical activity of the human brain as it is simple and non-invasive (we only need to put some electrodes over a subject's head). The drawback being that the data captured is often a mix of several signals: the informative cortically generated signal (which we want to capture) is contaminated by other cerebral electrical artifacts such as electromyography (EMG) or electroculography (EOG). In addition, neuroscientists can expect an additive noise coming from the electronics used to capture the signals. Thus, in order to use the EEG data, the first step is often to clean it. As EEG data comes naturally in the form of a time series, one way of looking at this task is saying that we want to perform inference to find the filtering distribution over some directed graphical model where the observed variables are noisy. 

---
layout: project
title:  "Summer Research 2017"
categories: jekyll update
img: smith_kristensen.png
categories: [research]
slides: ../../../../../resources/SummerResearch17/presentation.pdf
paper: ../../../../../resources/SummerResearch17/smith_kristensen.pdf
poster: ../../../../../resources/SummerResearch17/poster.pdf
---

# Abstract
We tested two techniques that can assist in the
automatic extraction and analysis of laboratory mouse ultrasonic
vocalizations. First, we substituted a Morlet-wavelet-based scalogram
in place of the commonly used Fourier-based spectrogram.
The frequencies in a scalogram are logarithmically scaled, which
likely makes it better model a mouse’s pitch perception based
on the structure of its inner ear. Works that use the linear spectrogram
are more likely to overemphasize frequency change at
high frequencies, and so might misclassify calls when partitioning
them according to frequency modulation. We showed that laboratory
mice do indeed modulate their calls more when making
high-frequency calls, which we would expect if they perceive pitch
logarithmically. Secondly, we used “deep” convolutional neural
networks to automatically identify calls within the scalogram.
A convolutional neural network performs much like the animal
visual cortex, and has enjoyed recent success in computer-vision
and related problems. We compared the convolutional network
to a conventional fully-connected neural network and the Song
filter used by recent papers, and found that our convolutional
network identifies calls with greater precision and recall.

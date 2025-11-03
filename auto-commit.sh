#!/bin/bash
while true; do
  sleep 300  # חכה 5 דקות (300 שניות)
  git add .
  git commit -m "Auto-save: $(date)"
  git push
done

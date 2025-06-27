  function calculateCalories() {
      const weight = parseFloat(document.getElementById('weight').value);
      const height = parseFloat(document.getElementById('height').value);
      const age = parseFloat(document.getElementById('age').value);
      const resultDiv = document.getElementById('calorieResult');

      if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        resultDiv.textContent = "Please enter valid values for all fields.";
        return;
      }

      // Using Mifflin-St Jeor Equation (approximate maintenance calories)
      const bmr = 10 * weight + 6.25 * height - 5 * age + 5; // for males
      resultDiv.innerHTML = `
        Estimated Maintenance Calories: <strong>${Math.round(bmr)} kcal/day</strong><br>
        To Lose Weight: <strong>${Math.round(bmr - 500)} kcal/day</strong><br>
        To Gain Muscle: <strong>${Math.round(bmr + 300)} kcal/day</strong>
      `;
    }

    function showTrainingPlan() {
      const weight = parseFloat(document.getElementById('weightRange').value);
      const trainingResult = document.getElementById('trainingResult');

      if (isNaN(weight)) {
        trainingResult.textContent = "Please enter a valid weight.";
        return;
      }

      let plan = "";
      if (weight <= 50) {
        plan = "Focus on compound lifts like squats, bench press, and deadlifts. Eat protein-rich food.";
      } else if (weight >= 70 && weight <= 80) {
        plan = "Cycle bulking and cutting phases. Include strength and hypertrophy workouts.";
      } else if (weight >= 81 && weight <= 95) {
        plan = "Prioritize fat loss with HIIT, cardio, and resistance training. Reduce caloric intake.";
      } else {
        plan = "Maintain a balanced workout: 3 days strength, 2 days cardio. Monitor diet closely.";
      }

      trainingResult.innerHTML = `<strong>Recommended Plan:</strong><br>${plan}`;
    }
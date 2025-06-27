// Exercise data
const exercisesData = {
    chest: [
        {
            name: "Bench Press",
            sets: "4 sets",
            reps: "8-12 reps",
            steps: [
                "Lie flat on the bench with your eyes directly under the bar",
                "Grip the bar with hands slightly wider than shoulder-width",
                "Plant your feet firmly on the ground",
                "Unrack the bar and position it over your chest",
                "Lower the bar slowly to your chest, touching lightly",
                "Press the bar back up in a controlled motion",
                "Keep your shoulder blades pulled back throughout the movement",
                "Complete the set and rack the bar safely"
            ]
        },
        {
            name: "Incline Dumbbell Press",
            sets: "3 sets",
            reps: "10-15 reps",
            steps: [
                "Set the bench to a 30-45 degree incline",
                "Hold a dumbbell in each hand at shoulder level",
                "Plant your feet firmly on the ground",
                "Press the dumbbells up and slightly inward",
                "Squeeze your chest at the top of the movement",
                "Lower the weights slowly with control",
                "Keep your core engaged throughout",
                "Repeat for the prescribed number of reps"
            ]
        },
        {
            name: "Push-ups",
            sets: "3 sets",
            reps: "15-25 reps",
            steps: [
                "Start in a plank position with hands shoulder-width apart",
                "Keep your body in a straight line from head to heels",
                "Engage your core and glutes",
                "Lower your chest toward the ground",
                "Push back up to the starting position",
                "Keep your elbows at a 45-degree angle",
                "Maintain proper form throughout",
                "Complete the set without compromising form"
            ]
        },
        {
            name: "Dumbbell Flyes",
            sets: "3 sets",
            reps: "12-15 reps",
            steps: [
                "Lie on a flat bench holding dumbbells above your chest",
                "Keep a slight bend in your elbows",
                "Lower the weights in a wide arc",
                "Feel the stretch in your chest muscles",
                "Squeeze your chest to bring the weights back up",
                "Maintain the arc motion throughout",
                "Control the weight on both the up and down phases",
                "Complete the movement with proper form"
            ]
        },
        {
            name: "Dips",
            sets: "3 sets",
            reps: "8-15 reps",
            steps: [
                "Grip the parallel bars with your arms straight",
                "Keep your body upright and core engaged",
                "Lower yourself by bending your elbows",
                "Go down until you feel a stretch in your chest",
                "Push yourself back up to the starting position",
                "Keep your movements slow and controlled",
                "Avoid swinging or using momentum",
                "Complete the set maintaining good form"
            ]
        },
        {
            name: "Cable Crossover",
            sets: "3 sets",
            reps: "12-15 reps",
            steps: [
                "Set the cable machine with high pulleys",
                "Grab the handles and step forward slightly",
                "Keep a slight forward lean",
                "Bring your hands together in front of your chest",
                "Squeeze your chest muscles at the peak",
                "Slowly return to the starting position",
                "Maintain tension throughout the movement",
                "Focus on the muscle contraction"
            ]
        },
        {
            name: "Decline Bench Press",
            sets: "3 sets",
            reps: "8-12 reps",
            steps: [
                "Set the bench to a decline position",
                "Secure your legs in the leg holds",
                "Grip the bar with hands slightly wider than shoulders",
                "Unrack the bar and position over lower chest",
                "Lower the bar to your lower chest",
                "Press back up in a controlled motion",
                "Keep your shoulder blades retracted",
                "Complete the set and rack safely"
            ]
        }
    ],
    back: [
        {
            name: "Deadlift",
            sets: "4 sets",
            reps: "5-8 reps",
            steps: [
                "Stand with feet hip-width apart, bar over mid-foot",
                "Bend at hips and knees to grip the bar",
                "Keep your chest up and spine neutral",
                "Engage your lats and core",
                "Drive through your heels to lift the bar",
                "Keep the bar close to your body",
                "Stand tall with shoulders back at the top",
                "Lower the bar with control to complete the rep"
            ]
        },
        {
            name: "Pull-ups",
            sets: "4 sets",
            reps: "6-12 reps",
            steps: [
                "Hang from the pull-up bar with overhand grip",
                "Keep your hands shoulder-width apart",
                "Engage your core and squeeze your glutes",
                "Pull yourself up by driving your elbows down",
                "Bring your chin over the bar",
                "Lower yourself slowly with control",
                "Maintain tension in your lats throughout",
                "Complete the rep at full arm extension"
            ]
        },
        {
            name: "Bent-over Barbell Row",
            sets: "4 sets",
            reps: "8-12 reps",
            steps: [
                "Stand with feet hip-width apart holding the barbell",
                "Hinge at the hips to bend forward 45 degrees",
                "Keep your knees slightly bent",
                "Let the bar hang at arm's length",
                "Pull the bar to your lower chest/upper abdomen",
                "Squeeze your shoulder blades together",
                "Lower the bar slowly with control",
                "Maintain your bent-over position throughout"
            ]
        },
        {
            name: "Lat Pulldown",
            sets: "3 sets",
            reps: "10-15 reps",
            steps: [
                "Sit at the lat pulldown machine",
                "Grip the bar wider than shoulder-width",
                "Keep your chest up and core engaged",
                "Pull the bar down to your upper chest",
                "Focus on using your back muscles, not arms",
                "Squeeze your shoulder blades at the bottom",
                "Slowly return the bar to starting position",
                "Maintain control throughout the movement"
            ]
        },
        {
            name: "T-Bar Row",
            sets: "3 sets",
            reps: "8-12 reps",
            steps: [
                "Straddle the T-bar with feet shoulder-width apart",
                "Bend at hips and knees to grip the handles",
                "Keep your chest up and back straight",
                "Pull the weight toward your chest",
                "Squeeze your shoulder blades together",
                "Feel the contraction in your mid-back",
                "Lower the weight slowly with control",
                "Maintain proper posture throughout"
            ]
        },
        {
            name: "Seated Cable Row",
            sets: "3 sets",
            reps: "12-15 reps",
            steps: [
                "Sit at the cable row machine with knees slightly bent",
                "Grip the handle with both hands",
                "Keep your back straight and chest up",
                "Pull the handle to your lower chest",
                "Squeeze your shoulder blades together",
                "Feel the stretch in your lats",
                "Slowly return to the starting position",
                "Maintain tension throughout the movement"
            ]
        },
        {
            name: "Single-arm Dumbbell Row",
            sets: "3 sets each arm",
            reps: "10-12 reps",
            steps: [
                "Place one knee and hand on a bench",
                "Hold a dumbbell in your free hand",
                "Keep your back straight and parallel to the floor",
                "Let the dumbbell hang at arm's length",
                "Pull the weight to your hip",
                "Squeeze your shoulder blade",
                "Lower the weight slowly with control",
                "Complete all reps before switching sides"
            ]
        }
    ],
    shoulders: [
        {
            name: "Overhead Press",
            sets: "4 sets",
            reps: "6-10 reps",
            steps: [
                "Stand with feet shoulder-width apart",
                "Hold the barbell at shoulder level",
                "Keep your core tight and chest up",
                "Press the bar straight up overhead",
                "Lock out your arms at the top",
                "Lower the bar slowly to shoulder level",
                "Keep your elbows slightly forward",
                "Maintain proper posture throughout"
            ]
        },
        {
            name: "Lateral Raises",
            sets: "3 sets",
            reps: "12-15 reps",
            steps: [
                "Stand with feet hip-width apart",
                "Hold dumbbells at your sides",
                "Keep a slight bend in your elbows",
                "Raise the weights out to your sides",
                "Lift until your arms are parallel to the floor",
                "Pause briefly at the top",
                "Lower the weights slowly with control",
                "Focus on using your side deltoids"
            ]
        },
        {
            name: "Front Raises",
            sets: "3 sets",
            reps: "12-15 reps",
            steps: [
                "Stand with feet shoulder-width apart",
                "Hold dumbbells in front of your thighs",
                "Keep your core engaged",
                "Raise one or both weights forward",
                "Lift until your arms are parallel to the floor",
                "Keep a slight bend in your elbows",
                "Lower the weights slowly",
                "Alternate arms or do both together"
            ]
        },
        {
            name: "Rear Delt Flyes",
            sets: "3 sets",
            reps: "12-15 reps",
            steps: [
                "Bend forward at the hips 45 degrees",
                "Hold light dumbbells with arms hanging",
                "Keep a slight bend in your elbows",
                "Raise the weights out to your sides",
                "Squeeze your shoulder blades together",
                "Focus on your rear deltoids",
                "Lower the weights slowly",
                "Maintain the bent-over position"
            ]
        },
        {
            name: "Arnold Press",
            sets: "3 sets",
            reps: "10-12 reps",
            steps: [
                "Sit on a bench with back support",
                "Start with dumbbells at shoulder level, palms facing you",
                "Press the weights up while rotating your wrists",
                "End with palms facing forward at the top",
                "Slowly lower while rotating back to start",
                "Keep your core engaged throughout",
                "Control the weight on both phases",
                "Focus on the full range of motion"
            ]
        },
        {
            name: "Upright Rows",
            sets: "3 sets",
            reps: "10-12 reps",
            steps: [
                "Stand with feet hip-width apart",
                "Hold a barbell with hands close together",
                "Keep the bar close to your body",
                "Pull the bar up to chest level",
                "Lead with your elbows",
                "Keep your shoulders down and back",
                "Lower the bar slowly with control",
                "Stop if you feel shoulder discomfort"
            ]
        },
        {
            name: "Face Pulls",
            sets: "3 sets",
            reps: "15-20 reps",
            steps: [
                "Set a cable machine at upper chest height",
                "Use a rope attachment",
                "Grip the rope with both hands",
                "Pull the rope toward your face",
                "Separate your hands as you pull",
                "Focus on your rear delts and rhomboids",
                "Slowly return to the starting position",
                "Keep your shoulders down throughout"
            ]
        }
    ],
    biceps: [
        {
            name: "Barbell Curls",
            sets: "4 sets",
            reps: "8-12 reps",
            steps: [
                "Stand with feet shoulder-width apart",
                "Hold the barbell with underhand grip",
                "Keep your elbows close to your sides",
                "Curl the bar up toward your chest",
                "Squeeze your biceps at the top",
                "Lower the bar slowly with control",
                "Don't swing or use momentum",
                "Keep your wrists straight throughout"
            ]
        },
        {
            name: "Dumbbell Curls",
            sets: "3 sets",
            reps: "10-15 reps",
            steps: [
                "Stand or sit with dumbbells at your sides",
                "Keep your elbows stationary",
                "Curl one or both weights up",
                "Rotate your wrists as you lift",
                "Squeeze your biceps at the top",
                "Lower the weights slowly",
                "Maintain control throughout the movement",
                "Focus on the muscle contraction"
            ]
        },
        {
            name: "Hammer Curls",
            sets: "3 sets",
            reps: "10-12 reps",
            steps: [
                "Hold dumbbells with neutral grip (palms facing each other)",
                "Keep your elbows close to your sides",
                "Curl the weights up maintaining neutral grip",
                "Don't rotate your wrists",
                "Squeeze at the top of the movement",
                "Lower the weights slowly",
                "Keep your core engaged",
                "Focus on your biceps and forearms"
            ]
        },
        {
            name: "Preacher Curls",
            sets: "3 sets",
            reps: "8-12 reps",
            steps: [
                "Sit at the preacher bench",
                "Rest your arms on the angled pad",
                "Hold the barbell or EZ-bar with underhand grip",
                "Keep your chest against the pad",
                "Curl the weight up slowly",
                "Don't fully lock out at the bottom",
                "Lower the weight with control",
                "Focus on the stretch and contraction"
            ]
        },
        {
            name: "Cable Curls",
            sets: "3 sets",
            reps: "12-15 reps",
            steps: [
                "Set the cable machine at the lowest position",
                "Attach a straight or EZ-bar handle",
                "Stand facing the machine",
                "Grip the handle with underhand grip",
                "Keep your elbows close to your sides",
                "Curl the handle up toward your chest",
                "Squeeze your biceps at the top",
                "Lower with control, maintaining tension"
            ]
        },
        {
            name: "Concentration Curls",
            sets: "3 sets each arm",
            reps: "10-12 reps",
            steps: [
                "Sit on a bench with legs spread",
                "Hold a dumbbell in one hand",
                "Rest your elbow against your inner thigh",
                "Let the weight hang at arm's length",
                "Curl the weight up slowly",
                "Focus intensely on your bicep",
                "Lower the weight with control",
                "Complete all reps before switching arms"
            ]
        },
        {
            name: "21s (Barbell Curls)",
            sets: "2 sets",
            reps: "21 reps (7+7+7)",
            steps: [
                "Hold a barbell with underhand grip",
                "First 7 reps: curl halfway up from bottom",
                "Keep the partial range of motion consistent",
                "Next 7 reps: curl from halfway to top",
                "Focus on the peak contraction",
                "Final 7 reps: complete full range of motion",
                "Don't rest between the different phases",
                "This creates an intense bicep burn"
            ]
        }
    ],
    triceps: [
        {
            name: "Close-Grip Bench Press",
            sets: "4 sets",
            reps: "6-10 reps",
            steps: [
                "Lie on a bench with hands closer than shoulder-width",
                "Keep your elbows close to your sides",
                "Lower the bar to your chest",
                "Press the bar back up",
                "Focus on using your triceps",
                "Don't let your elbows flare out",
                "Keep your wrists straight",
                "Control the weight throughout"
            ]
        },
        {
            name: "Tricep Dips",
            sets: "3 sets",
            reps: "8-15 reps",
            steps: [
                "Position yourself between parallel bars or on a bench",
                "Keep your body upright",
                "Lower yourself by bending your elbows",
                "Go down until you feel a stretch",
                "Push yourself back up",
                "Keep your elbows close to your body",
                "Don't lean forward too much",
                "Focus on your triceps working"
            ]
        },
        {
            name: "Overhead Tricep Extension",
            sets: "3 sets",
            reps: "10-12 reps",
            steps: [
                "Stand or sit holding a dumbbell overhead",
                "Keep your elbows close to your head",
                "Lower the weight behind your head",
                "Keep your upper arms stationary",
                "Extend your arms back to the starting position",
                "Feel the stretch in your triceps",
                "Control the weight on both phases",
                "Keep your core engaged"
            ]
        },
        {
            name: "Tricep Pushdowns",
            sets: "3 sets",
            reps: "12-15 reps",
            steps: [
                "Stand at a cable machine with high pulley",
                "Grip the rope or bar attachment",
                "Keep your elbows at your sides",
                "Push the weight down until arms are extended",
                "Squeeze your triceps at the bottom",
                "Slowly return to the starting position",
                "Don't let your elbows drift forward",
                "Maintain constant tension"
            ]
        },
        {
            name: "Diamond Push-ups",
            sets: "3 sets",
            reps: "8-15 reps",
            steps: [
                "Get into push-up position",
                "Place your hands close together forming a diamond",
                "Keep your body in a straight line",
                "Lower your chest to your hands",
                "Push back up to starting position",
                "Keep your elbows close to your body",
                "Engage your core throughout",
                "Focus on your triceps working"
            ]
        },
        {
            name: "Skull Crushers",
            sets: "3 sets",
            reps: "10-12 reps",
            steps: [
                "Lie on a bench holding an EZ-bar or dumbbells",
                "Start with arms extended over your chest",
                "Keep your upper arms stationary",
                "Lower the weight toward your forehead",
                "Stop just before touching your head",
                "Extend your arms back to starting position",
                "Keep your elbows in the same position",
                "Control the weight carefully"
            ]
        },
        {
            name: "Reverse Grip Pushdowns",
            sets: "3 sets",
            reps: "12-15 reps",
            steps: [
                "Stand at a cable machine with high pulley",
                "Grip the bar with underhand grip",
                "Keep your elbows at your sides",
                "Push the bar down until arms are extended",
                "Focus on the different angle of tricep activation",
                "Slowly return to starting position",
                "Don't use your shoulders or back",
                "Keep tension on your triceps throughout"
            ]
        }
    ],
    legs: [
        {
            name: "Squats",
            sets: "4 sets",
            reps: "8-12 reps",
            steps: [
                "Stand with feet shoulder-width apart",
                "Keep your chest up and core engaged",
                "Lower yourself as if sitting in a chair",
                "Go down until your thighs are parallel to the floor",
                "Drive through your heels to stand back up",
                "Keep your knees aligned with your toes",
                "Maintain a straight back throughout",
                "Don't let your knees cave inward"
            ]
        },
        {
            name: "Leg Press",
            sets: "4 sets",
            reps: "12-15 reps",
            steps: [
                "Sit in the leg press machine",
                "Place your feet shoulder-width apart on the platform",
                "Keep your back flat against the pad",
                "Lower the weight by bending your knees",
                "Go down until your knees reach 90 degrees",
                "Press the weight back up through your heels",
                "Don't lock your knees completely at the top",
                "Keep constant tension on your muscles"
            ]
        },
        {
            name: "Romanian Deadlifts",
            sets: "4 sets",
            reps: "10-12 reps",
            steps: [
                "Stand holding a barbell with overhand grip",
                "Keep your feet hip-width apart",
                "Start with the bar at hip level",
                "Hinge at your hips, pushing them back",
                "Lower the bar while keeping it close to your legs",
                "Feel the stretch in your hamstrings",
                "Drive your hips forward to return to start",
                "Keep your back straight throughout"
            ]
        },
        {
            name: "Lunges",
            sets: "3 sets each leg",
            reps: "10-12 reps",
            steps: [
                "Stand with feet hip-width apart",
                "Step forward with one leg",
                "Lower your body until both knees are at 90 degrees",
                "Keep your front knee over your ankle",
                "Push through your front heel to return to start",
                "Keep your torso upright throughout",
                "Don't let your back knee touch the ground",
                "Complete all reps before switching legs"
            ]
        },
        {
            name: "Leg Curls",
            sets: "3 sets",
            reps: "12-15 reps",
            steps: [
                "Lie face down on the leg curl machine",
                "Position the pad just above your ankles",
                "Keep your hips pressed against the bench",
                "Curl your heels toward your glutes",
                "Squeeze your hamstrings at the top",
                "Lower the weight slowly with control",
                "Don't let the weight stack touch between reps",
                "Focus on the hamstring contraction"
            ]
        },
        {
            name: "Calf Raises",
            sets: "4 sets",
            reps: "15-20 reps",
            steps: [
                "Stand on a calf raise machine or platform",
                "Position the balls of your feet on the edge",
                "Let your heels drop below the platform",
                "Rise up onto your toes as high as possible",
                "Squeeze your calves at the top",
                "Lower slowly to feel the stretch",
                "Keep your legs straight throughout",
                "Use a full range of motion"
            ]
        },
        {
            name: "Bulgarian Split Squats",
            sets: "3 sets each leg",
            reps: "10-12 reps",
            steps: [
                "Stand 2-3 feet in front of a bench",
                "Place the top of one foot on the bench behind you",
                "Lower your body until your front thigh is parallel",
                "Keep most of your weight on your front leg",
                "Push through your front heel to return to start",
                "Keep your torso upright",
                "Don't bounce at the bottom",
                "Complete all reps before switching legs"
            ]
        }
    ],
    abs: [
        {
            name: "Planks",
            sets: "3 sets",
            reps: "30-60 seconds",
            steps: [
                "Start in a push-up position",
                "Lower onto your forearms",
                "Keep your body in a straight line",
                "Engage your core muscles",
                "Don't let your hips sag or pike up",
                "Keep your head in neutral position",
                "Breathe normally throughout",
                "Hold for the prescribed time"
            ]
        },
        {
            name: "Crunches",
            sets: "3 sets",
            reps: "15-25 reps",
            steps: [
                "Lie on your back with knees bent",
                "Place your hands behind your head",
                "Keep your feet flat on the floor",
                "Lift your shoulders off the ground",
                "Focus on contracting your abs",
                "Don't pull on your neck",
                "Lower back down with control",
                "Keep your lower back on the floor"
            ]
        },
        {
            name: "Russian Twists",
            sets: "3 sets",
            reps: "20-30 reps",
            steps: [
                "Sit on the floor with knees bent",
                "Lean back slightly to engage your core",
                "Lift your feet off the ground if possible",
                "Hold your hands together or hold a weight",
                "Rotate your torso from side to side",
                "Touch the ground on each side",
                "Keep your chest up throughout",
                "Control the movement, don't just swing"
            ]
        },
        {
            name: "Leg Raises",
            sets: "3 sets",
            reps: "10-15 reps",
            steps: [
                "Lie on your back with legs straight",
                "Place your hands at your sides or under your lower back",
                "Keep your legs together",
                "Lift your legs until they're perpendicular to the floor",
                "Lower them slowly without touching the ground",
                "Keep your lower back pressed down",
                "Don't swing your legs",
                "Focus on your lower abs"
            ]
        },
        {
            name: "Mountain Climbers",
            sets: "3 sets",
            reps: "20-30 reps",
            steps: [
                "Start in a plank position",
                "Keep your hands directly under your shoulders",
                "Bring one knee toward your chest",
                "Quickly switch legs in a running motion",
                "Keep your hips level throughout",
                "Maintain plank position with your upper body",
                "Breathe steadily throughout",
                "Keep the movement controlled but quick"
            ]
        },
        {
            name: "Dead Bug",
            sets: "3 sets each side",
            reps: "8-10 reps",
            steps: [
                "Lie on your back with arms extended toward ceiling",
                "Lift your knees to 90 degrees",
                "Keep your lower back pressed to the floor",
                "Slowly extend opposite arm and leg",
                "Lower until they're just above the ground",
                "Return to starting position with control",
                "Keep your core engaged throughout",
                "Complete all reps before switching sides"
            ]
        },
        {
            name: "Bicycle Crunches",
            sets: "3 sets",
            reps: "20-30 reps",
            steps: [
                "Lie on your back with hands behind your head",
                "Lift your shoulders off the ground",
                "Bring your knees up to 90 degrees",
                "Rotate your torso to bring elbow to opposite knee",
                "Extend the other leg straight out",
                "Switch sides in a pedaling motion",
                "Don't pull on your neck",
                "Keep your shoulders off the ground throughout"
            ]
        }
    ]
};

// Navigation functions
function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show the selected page
    document.getElementById(pageId).classList.add('active');
}

function showHomePage() {
    showPage('homePage');
}

function showBodyPartsPage() {
    showPage('bodyPartsPage');
}

function showExercisePage(bodyPart) {
    showPage('exercisePage');
    
    // Update page title
    const title = bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1);
    document.getElementById('exercisePageTitle').textContent = `${title} Exercises`;
    
    // Load exercises for the selected body part
    loadExercises(bodyPart);
}

function loadExercises(bodyPart) {
    const exercisesList = document.getElementById('exercisesList');
    const exercises = exercisesData[bodyPart];
    
    if (!exercises) {
        exercisesList.innerHTML = '<p>No exercises found for this body part.</p>';
        return;
    }
    
    let exercisesHTML = '';
    
    exercises.forEach((exercise, index) => {
        exercisesHTML += `
            <div class="exercise-card">
                <div class="exercise-header">
                    <h3>${exercise.name}</h3>
                    <div class="sets-reps">${exercise.sets} × ${exercise.reps}</div>
                </div>
                <div class="exercise-content">
                    <ol class="steps-list">
                        ${exercise.steps.map((step, stepIndex) => `
                            <li class="step-item">
                                <div class="step-number-small">${stepIndex + 1}</div>
                                <p>${step}</p>
                            </li>
                        `).join('')}
                    </ol>
                </div>
            </div>
        `;
    });
    
    exercisesList.innerHTML = exercisesHTML;
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Handle navigation based on the target
            if (targetId === 'home') {
                showHomePage();
            } else if (targetId === 'about') {
                // You can add an about page or scroll to a section
                alert('About section - Add your gym information here!');
            } else if (targetId === 'contact') {
                // You can add a contact page or show contact info
                alert('Contact: info@fitpowergym.com | Phone: +1-234-567-8900');
            }
        });
    });
    
    // Add some interactive effects
    addInteractiveEffects();
});

function addInteractiveEffects() {
    // Add hover effect to body part cards
    const bodyPartCards = document.querySelectorAll('.body-part-card');
    bodyPartCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click animation to buttons
    const buttons = document.querySelectorAll('.cta-button, .back-button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
}  
   

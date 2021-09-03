const projects = [
  {
    title: 'Skateboard',
    description:
      'Skateboard project is a react application that is mainly built for mobile devices.',
    projectUrl: 'https://skateboard.sakshimittal.xyz',
  },
  {
    title: '2048 Game',
    description:
      '2048 is a game where you combine numbered tiles in order to gain a higher numbered tile.',
    projectUrl:
      'https://codewithsakshi.github.io/js-exercise/2048-game/index.html',
  },
  {
    title: 'Breakout Game',
    description:
      'A layer of bricks and the goal is to destroy them all by repeatedly bouncing a ball off a paddle into them.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises-v2/breakout-game/index.html',
  },
  {
    title: 'Github profile',
    description: 'Search Gihub user and find the Gihtub account',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/github-profiles/index.html',
  },
  {
    title: 'Movie seat booking ',
    description: 'Book a seat in a movie theatre as your choice',
    projectUrl:
      'https://codewithsakshi.github.io/exercises-v2/movie-seat-booking/index.html',
  },
  {
    title: 'BMI calculator',
    description:
      'By input the Weight and height of a person calculate body mass index',
    projectUrl:
      'https://codewithsakshi.github.io/js-exercise/bmi-calculator/index.html',
  },
  {
    title: 'Speech text reader',
    description: 'Enter text and listen in different language',
    projectUrl:
      'https://codewithsakshi.github.io/exercises-v2/speech-text-reader/index.html',
  },
  {
    title: 'Live Leaderboard',
    description: 'Changing views and change position according to the views',
    projectUrl:
      'https://codewithsakshi.github.io/js-exercise/live-leaderboard/index.html',
  },
  {
    title: 'Player Leaderboard',
    description:
      'The public leaderboard  to share their gameplay activity publicly.',
    projectUrl:
      'https://codewithsakshi.github.io/js-exercise/player-leaderboard/index.html',
  },
  {
    title: 'Todo list',
    description:
      'Add list of things that one wants to get done or that need to get done',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/todo-list/index.html',
  },

  {
    title: 'Drink water',
    description: 'Click on the glass to drink water as you want.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/drink-water/index.html',
  },
  {
    title: 'Feedback',
    description: 'Select a rating that you want to give and send us feedback.',
    projectUrl:
      'https://codewithsakshi.github.io/js-exercise/feedback/index.html',
  },
  {
    title: 'Expense tracker',
    description:
      'Enter your income and expense text for calculating the income.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises-v2/expense-tracker/index.html',
  },
  {
    title: 'Banking App',
    description: 'A form for opening bank account.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises-v2/banking-app/index.html',
  },
  {
    title: 'Webform Validating',
    description: 'Try to fill form and and if it is not valid get an error. ',
    projectUrl:
      'https://codewithsakshi.github.io/js-exercise/webform-validating/index.html',
  },
  {
    title: 'Generate joke',
    description: 'Click on the generate joke button and get many jokes.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/generate-joke/index.html',
  },
  {
    title: 'Theme clock',
    description: 'Clock for watching current time and update every second.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/theme-clock/index.html',
  },
  {
    title: 'Choice picker',
    description: 'Enter all the choices that you want and get a random choice.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/random-choice-picker/index.html',
  },
  {
    title: 'Increment counter',
    description:
      'Live increment in Twitter, Youtube, facebook Fans till reach at the target.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/incrementing-counter/index.html',
  },
  {
    title: 'Music player',
    description: 'Click on the play button and play music.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises-v2/music-player/index.html',
  },
  {
    title: 'Testimonial box',
    description: 'Update Testimonials at every five seconds.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/testimonial-box/index.html',
  },
  {
    title: 'Solar System',
    description: 'Solar system ui and calculate mass at different planets.',
    projectUrl:
      'https://codewithsakshi.github.io/js-exercise/solar-sytem/index.html',
  },
  {
    title: 'Image generator',
    description: 'Random Image generator from unsplash url.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/random-image-generator/index.html',
  },
  {
    title: 'Quiz App',
    description: 'Programming concept quiz app to practice.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/quiz-app/index.html',
  },
  {
    title: 'Good Cheap Fast',
    description: 'Active toggle button.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/good-cheap-fast/index.html',
  },
  {
    title: 'Speak number guess',
    description: 'Speak any number that you want and get awesome result.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises-v2/speak-number-guess/index.html',
  },
  {
    title: 'Dom array method',
    description:
      'Vanilla projects for users information and you can also get random user.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises-v2/dom-array-methods/index.html',
  },
  {
    title: 'Currency calculator',
    description: 'Currency calculator to calculate exchange rate of currency.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises-v2/exchange-rate-calculator/index.html',
  },
  {
    title: 'Calculator',
    description: 'Calculate mathematics sum using the calculator.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/calculator-2/index.html',
  },
  {
    title: 'Hangman',
    description: 'Enter guess word and see the hidden part of the man.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises-v2/hangman/index.html',
  },
  {
    title: 'Relaxer App',
    description: 'Relaxer app with animation and a little javascript.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises-v2/relaxer-app/index.html',
  },
  {
    title: 'Verify account',
    description: 'Enter your email and verify your account entering the code.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/verify-account/index.html',
  },
  {
    title: 'Hidden search icon',
    description: 'Click on the button and get hidden search text button.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/hidden-search/index.html',
  },
  {
    title: 'Sound board',
    description:
      'Click on the sound button and get voices of the sound that you want.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/sound-board/index.html',
  },
  {
    title: 'Password strength',
    description:
      'Enter password that you want and visualize the effect on th blur background.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/password-strength-bg/index.html',
  },
  {
    title: 'Double clicked',
    description:
      'Click on the image and know how many times you liked with a amazing like effect.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/double-click-heart/index.html',
  },
  {
    title: 'Menu slider modal',
    description:
      'Click on the  signup button to get modal and hamburger also you can click anywhere on the window to close hamburger.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises-v2/menu-slider-modal/index.html',
  },
  {
    title: 'split landing page',
    description: 'landing page effect on hovering.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/split-landing-page/index.html',
  },
  {
    title: 'Drag image',
    description:
      'Drag the image and fix where you want to also get dragging and droping effect.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/drag-image/index.html',
  },
  {
    title: 'Survey form',
    description: 'Learn basic html, CSS and Javascript from free code camp',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/survey-form/index.html',
  },
  {
    title: 'Technical page',
    description:
      'Javascript basic documentation to learn object oriented scripting language',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/technical-page/index.html',
  },
  {
    title: 'Tribute page',
    description: 'Dr. Norman Borlaug who saved a billion lives',
    projectUrl: 'https://codewithsakshi.github.io/exercises/tribute/index.html',
  },
  {
    title: 'Landing page',
    description: 'Landing page for handcrafted, home made masterpieces',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/landing-page/index.html',
  },
  {
    title: 'Statistics UI',
    description: 'Statistics ui as per the 1963  and todays price.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/statistics-ui/index.html',
  },
  {
    title: 'Portal signup',
    description: 'Fill the form and signup on the portal.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/KRG-form/index.html',
  },
  {
    title: 'Enrollment form',
    description: 'Enrolled courses for the graduates people.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/enrollment-form/index.html',
  },
  {
    title: 'Contact form',
    description: 'Fill the form and connect with us.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/contact-form/index.html',
  },
  {
    title: 'Signup ',
    description: 'Create your account and get free quick singup.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/create-account/index.html',
  },
  {
    title: 'Register to webinar event',
    description:
      'Use of Augmented Reality to keep students engaged and provide detailed explanations of modals and course material.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/register-to-event/index.html',
  },
  {
    title: 'Microsoft homepage',
    description: 'Microsoft home page to buy the laptop.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/microsoft-home-page/index.html',
  },
  {
    title: 'Pricing component',
    description: 'Toggle button to change the price of the component.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/pricing-card/index.html',
  },
  {
    title: 'Skew background',
    description: 'Pure CSS skew background.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/skewed-background-css/index.html',
  },
  {
    title: 'Blur background',
    description: 'Drag the card and locate where you want.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/blur-background/index.html',
  },
  {
    title: 'Historical places',
    description:
      'Click on the cards and get the full view and name of the places',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/7-wonders/index.html',
  },
  {
    title: 'Scroll animation',
    description: 'Scroll page and get the slider content.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/scroll-animation/index.html',
  },
  {
    title: 'Slider background',
    description: 'image with the samebackground blur image.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/slider-background/index.html',
  },
  {
    title: 'Rotating animation',
    description: 'Click on the hamburger and rotate the page.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/rotating-animation/index.html',
  },
  {
    title: 'FAQ',
    description:
      'Click the icon button and get frequently answer of the question.',
    projectUrl: 'https://codewithsakshi.github.io/exercises/faq/index.html',
  },
  {
    title: 'Netflix navigation',
    description: 'Slider differnt background toggling the hamburger.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/netflix-navigation/index.html',
  },
  {
    title: 'Victoria perfume',
    description: 'Pure CSS page of the perfume.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/victoria-perfume/index.html',
  },
  {
    title: 'Sustainable development',
    description:
      'Transforming Madhya Pradesh lives by restoring the environment',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/sustainable-development/index.html',
  },
  {
    title: 'Carousel image',
    description:
      'Automatically changing the image and you can also change on clicking the button.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/image-carouse/index.html',
  },
  {
    title: 'National geographic',
    description: 'Wild show national geographic image.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/national-geographic/index.html',
  },
  {
    title: 'Shoes Collection',
    description: 'Nike shoes collection for boys.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/shoes-collection/index.html',
  },
  {
    title: 'Blurry Loading',
    description:
      'Load background from blur and get clear after a time interval.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/blurry-loading/index.html',
  },
  {
    title: 'Animated navigation',
    description: 'Toggle the icon and get the animated effect of links.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/animated-navigation/index.html',
  },
  {
    title: 'Event Keycodes',
    description: 'Press any key as you want and get the keycode and keyname.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/event-key-code/index.html',
  },
  {
    title: 'Progress steps',
    description: 'Click the button and get the progress bar.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/progress-step/index.html',
  },
  {
    title: 'Ripple effect',
    description: 'Click on the button and get the ripple effect.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/button-ripple-effect/index.html',
  },
  {
    title: 'Vertical slider',
    description:
      'Vertical slider background on clicking the button text and background image both slided vertically.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/vertical-slider/index.html',
  },
  {
    title: 'Kinetic loader',
    description: 'Kinetic Loader with animation.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/kinetic-loader/index.html',
  },
  {
    title: 'Toast notification',
    description:
      'Click on the button and get the notification of different types and color.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/toast-notification/index.html',
  },
  {
    title: 'Custom range',
    description:
      'Custom range slider and change the value according to the range.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/custom-range-slider/index.html',
  },
  {
    title: 'Auto text',
    description: 'auto text effect and also change the speed of the text.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/auto-text-effect/index.html',
  },
  {
    title: 'Animated countdown',
    description: 'Animated countdown countdown for anything.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/animated-countdown/index.html',
  },
  {
    title: 'Feedback design',
    description: 'Click on the feeback as you wnat and get the same feedback.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/feedback-ui-design/index.html',
  },
  {
    title: 'Mob navigation',
    description: 'Mob tab navigation for the different page.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/mobile-tab-navigation/index.html',
  },
  {
    title: 'Boxes background',
    description: '3D boxes background click on the magic button and see magic.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/3d-boxes-background/3d-boxes-background.html',
  },
  {
    title: 'Insect game',
    description: 'Choose insect that you want and play impossible game.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/insect-game/index.html',
  },
  {
    title: 'Content placeholder',
    description: 'Content placeholder card.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/content-placeholder/index.html',
  },
  {
    title: 'Movie App',
    description: 'Movie App to get info and also search as you want.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/hollywood-movie-app/index.html',
  },
  {
    title: 'Sticky navigation',
    description: 'Sticky navigation with a header and hero section.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises/sticky-navigation/index.html',
  },
  {
    title: 'Lyrics search',
    description:
      'Search the singer as you want and get the lyrics of the song.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises-v2/lyrics-search/index.html',
  },
  {
    title: 'Lemon.IO',
    description: 'Become a lemon free lance developer to work with us.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises-v2/lemon-free-lance/index.html',
  },
  {
    title: 'Treva',
    description: 'Treva Page to find your dream job.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises-v2/treva/index.html',
  },
  {
    title: 'DOM project',
    description:
      'Small dom project only for learning purpose to write HTML and CSS in Javascript file.',
    projectUrl:
      'https://codewithsakshi.github.io/js-exercise/dom-exercise-3/index.html',
  },
  {
    title: '3D lighting ball animations',
    description: '3D ball rotating animations with a beautiful background.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises-v2/3D-css-lighting-ball/index.html',
  },
  {
    title: 'New year countdown',
    description:
      'New Year coundown App for uncoming year.Car Landing page using  only Tailwind CSS.',
    projectUrl:
      'https://codewithsakshi.github.io/exercises-v2/newyear-countdown/index.html',
  },
  {
    title: 'Car landing page',
    description: 'Car Landing page using  only Tailwind CSS.',
    projectUrl:
      'https://codewithsakshi.github.io/learn-tailwind/src/exercises/car-landing-page/index.html',
  },
  {
    title: 'Form validator',
    description: 'Form Validator with a valid reasons.',
    projectUrl:
      'https://codewithsakshi.github.io/learn-tailwind/src/exercises/form-validator/index.html',
  },
  {
    title: 'Online Coding school',
    description:
      'Online Coding school to learn Webdevelopment using Tailwind CSS.',
    projectUrl:
      'https://codewithsakshi.github.io/learn-tailwind/src/exercises/binary-coding-school/index.html',
  },
];

export default projects;

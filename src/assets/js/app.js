// app.js
angular.module('questionnaireApp', [])
  .controller('QuestionnaireController', function($scope, $http) {
    $scope.groups = [
      {
        name: 'General-Mental-Wellbeing',
        questions: [
          {
            text: 'I generally feel optimistic about my future.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I often experience a sense of purpose in my life.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I am satisfied with the overall quality of my life.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I am able to effectively cope with stress and challenges.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I feel a sense of contentment in my daily activities.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I believe I have control over my own thoughts and emotions.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I generally feel happy and fulfilled in my relationships.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I can easily bounce back from setbacks or disappointments.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I have a positive outlook on life.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I feel emotionally stable and resilient.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I am confident in my abilities to achieve my goals.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I feel a sense of belonging in my community or social circles.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I find joy in pursuing my hobbies and interests.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I have a good balance between work and leisure in my life.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I have a strong support system of friends and family.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I am able to express my emotions in a healthy and constructive manner.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I believe in my ability to overcome obstacles.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I generally feel satisfied with my personal achievements.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I have a positive body image and feel comfortable in my own skin.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I feel connected to something larger than myself (e.g., nature, spirituality).',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          }
        ],
        totalPoints: 0
      },
      {
        name: 'Anxiety-Assessment',
        questions: [
          {
            text: 'I often worry excessively about everyday tasks and responsibilities.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I frequently experience physical symptoms of anxiety (e.g., restlessness, rapid heartbeat).',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I find it difficult to control my anxious thoughts.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I avoid certain situations or activities due to fear or anxiety.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I often feel tense or on edge without a specific reason.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I have trouble falling asleep or staying asleep due to worry.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I feel overwhelmed by small stressors in my daily life.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I often imagine worst-case scenarios or catastrophic outcomes.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I frequently experience intrusive thoughts or fears.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I feel anxious in social situations or around unfamiliar people.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I often engage in repetitive or ritualistic behaviors to reduce anxiety.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I find it challenging to relax or unwind.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I have a tendency to anticipate negative outcomes or dangers.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I frequently experience a sense of impending doom or danger.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I feel irritable or easily agitated due to anxiety.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I often experience physical tension in my muscles.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I worry excessively about my health or the health of loved ones.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I frequently experience racing thoughts or a racing heartbeat.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I often second-guess my decisions or actions due to anxiety.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I feel overwhelmed by a constant sense of worry or fear.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
        ],
        totalPoints: 0
      },
      {
        name: 'Depression-Assessment',
        questions: [
          {
            text: 'I frequently feel sad or down for no apparent reason.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I have lost interest in activities or hobbies I used to enjoy.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I often feel tired or lack energy, even with adequate rest.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I have trouble concentrating or making decisions.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I feel a sense of hopelessness or pessimism about the future.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I experience changes in appetite or weight (increase or decrease).        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I struggle with feelings of guilt or worthlessness.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I have difficulty sleeping (insomnia) or sleep excessively (hypersomnia).        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I frequently experience a loss of motivation or enthusiasm.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I often feel emotionally numb or detached from others.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I have recurring thoughts of death or suicidal ideation.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I feel irritable or agitated without a clear cause.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I find it challenging to experience pleasure or joy.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I withdraw from social interactions or isolate myself.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I have difficulty managing my emotions or regulating my moods.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I often feel overwhelmed or burdened by daily tasks.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I frequently experience physical symptoms such as headaches or digestive issues.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I struggle to find meaning or purpose in my life.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I have a persistent feeling of sadness or emptiness.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I find it hard to imagine a future that is different from the present.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
        ],
        totalPoints: 0 
      },
      {
        name: 'Stress-Assessment',
        questions: [
          {
            text: 'I frequently feel overwhelmed by the demands of my life.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I often experience physical symptoms of stress (e.g., headaches, muscle tension).        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I have difficulty relaxing or unwinding after a stressful event or day.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I frequently worry about future events or outcomes.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I often feel on edge or easily startled.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I struggle to maintain a work-life balance.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I frequently feel irritable or impatient.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I have difficulty focusing or concentrating due to stress.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I often feel a sense of urgency or time pressure.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I have trouble falling asleep or staying asleep due to stress.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I feel emotionally drained or exhausted due to stress.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I frequently engage in unhealthy coping mechanisms (e.g., excessive drinking, overeating).        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I find it challenging to ask for help or delegate tasks to others.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I have difficulty prioritizing tasks or managing my time effectively.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I often feel trapped or stuck in stressful situations.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I struggle to adapt to change or uncertainty.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I experience difficulty in maintaining healthy relationships due to stress.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I frequently feel overwhelmed by negative thoughts or worries.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I have a tendency to overthink or obsess about minor details.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I often feel a sense of pressure to meet others expectations.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          }
        ],
        totalPoints: 0
      },
      {
        name: 'Selfesteem-Assessment',
        questions: [
          {
            text: 'I generally have a positive view of myself.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I often feel confident in my abilities and skills.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I frequently compare myself unfavorably to others.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I believe I am worthy of love and respect.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I often feel a sense of pride in my accomplishments.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I struggle to accept compliments or positive feedback from others.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I feel comfortable asserting my needs and boundaries.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I have a tendency to be self-critical or overly self-demanding.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I find it difficult to forgive myself for past mistakes or shortcomings.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I believe I have valuable qualities and attributes.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I often feel insecure or doubt my worthiness.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I frequently seek validation or approval from others.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I have a positive body image and accept my physical appearance.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I find it challenging to set realistic and achievable goals for myself.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I often feel undeserving of success or happiness.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I frequently engage in negative self-talk or self-deprecating thoughts.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I feel comfortable expressing my needs and desires to others.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I believe I have the ability to overcome challenges and setbacks.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },{
            text: 'I often feel ashamed or embarrassed about myself or my actions.        ',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
          {
            text: 'I have a strong sense of self-identity and know who I am.',
            options: [
              { text: 'Option 1', value: 1 },
              { text: 'Option 2', value: 2 },
              { text: 'Option 3', value: 3 },
              { text: 'Option 4', value: 4 },
              { text: 'Option 5', value: 5 }
            ],
            selectedOption: null
          },
        ],
        totalPoints: 0
      },
      // Add more questions here
    ];

    
    $scope.totalPoints = 0;
      // Loop through the questions and sum the selected option values
    $scope.calculatePoints = function() {
      angular.forEach($scope.groups, function(group) {
        group.totalPoints = 0;
        angular.forEach(group.questions, function(question) {
          if (question.selectedOption) {
            group.totalPoints += question.selectedOption.value;
          }
        });
      });
    };

    // Function to save all assessments for the logged-in user
    $scope.saveAssessments = function() {
      // Calculate total points for each group
      angular.forEach($scope.groups, function(group) {
        $scope.calculatePoints(group);
      });

      // Prepare the data to be sent to the API endpoint
      const username = 'admingod'; // Replace 'current_user' with the actual username
      const assessmentsData = {
        username,
        assessments: {}
      };

      // Create key-value pairs for each group score
      angular.forEach($scope.groups, function(group) {
        assessmentsData.assessments[group.name] = group.totalPoints;
      });

      // Send the data to the API endpoint using AngularJS $http service
      $http.post('/save-assessments', assessmentsData)
        .then(response => {
          // Handle the API response if needed
          console.log(response.data);
        })
        .catch(error => {
          // Handle API error if needed
          console.error('Error saving assessments:', error);
        });
    };
  });
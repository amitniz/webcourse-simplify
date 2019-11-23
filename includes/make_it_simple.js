var names_map = {
                 '234141':'Combinatorics',
                 '234117':'Introduction to CS H',
                 '234114':'Introduction to CS M',
                 '234118':'ATAM','234123':'Operating Systems',
                 '234124':'MATAM','234125':'Numerical Algorithms',
                 '234128':'Introduction to python','234129':'MATKA',
                 '234218':'Data Structures 1','234221':'Introduction to CS N',
                 '234247':'Algorithms 1','234292':'Logic for CS',
                 '234311':'Software Engineering Project 1','234313':'Industrial Project',
                 '234325':'Computer Graphics 1','236001':'Introduction to Faculty Research',
                 '236200':'Signal, Image, and Data Processing','236267':'Computer Structure',
                 '236309':'Introduction to Coding Theory','236319':'Programming Languages',
                 '236322':'Information Storage Systems',
                 '236332':'Parallel Course for Project in Arduino & IoT',
                 '236333':'Project in Arduino & IoT','236334':'Introduction to Computers Networks',
                 '236340':'Project in Computer Communication','236342':'Introduction to Software Verification',
                 '236343':'Theory of Computation','236349':'Project in Computer Security',
                 '236350':'Network Security','236351':'Disterbuted Systems',
                 '236360':'Theory Of Compilation','236363':'Database Systems',
                 '236366':'Project in Operating Systems','236369':'Managing data on The WWW',
                 '236370':'Parallel And Distributed Programming','236374':'Probabilistic Methods and Algorithms',
                 '236490':'Advanced Topics in Computer Security','236496':'Reverse Engineering',
                 '236500':'Cryptanalysis','236501':'Introduction to AI',
                 '236503':'Project in Software - Android Applications',
                 '236521':'Aproximation Algorithms','236523':'Introduction to Bioinformatics',
                 '236605':'The Metric Method and its Algorithmic Applications',
                 '236608':'Coding and Algorithms for Memories','236610':'Advanced Topics in CS',
                 '236622':'Advanced Topics in Algorithms 2','236703':'OOP','236755':'Distributed Algorithms',
                 '236756':'Intoduction to Machine Learning','236780':'Algorithms for Dynamic Memory Managment',
                 '236781':'Deep Learning on Computation Accelerators','236790':'Multigrid Methods',
                 '236801':'Seminar in CS 1','236802':'Seminar in CS 2','236804':'Seminar in CS 4',
                 '236813':'Seminar in Algorithms','236818':'Seminar in Bioinformatics','236826':'Seminar in Databases',
                 '236860':'Digital Image Processing','236861':'Geometric Computer Vision',
                 '236873':'Computer Vision','236927':'Introduction to Robotics',
                 '236990':'Intoduction to Quantum Information Processing',
                 '234112':'Introduction to C language','234126':'Intoduction to Computer C language',
                 '234262':'Logic Design','234290':'Project 1 in CS'
}

var courses = document.querySelectorAll('.wc-courses-list a');

for(var i=0;i<courses.length;i++){
    var course_num = courses[i].innerHTML;
    if(course_num in names_map){
        courses[i].innerHTML = names_map[course_num];
    }
}


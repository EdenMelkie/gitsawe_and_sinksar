import './Gitsawe.css';
import React, { useState, useEffect } from 'react';

// Mock data with the new content structure
const mockGitsaweData = {
    "Meskerem": {
        days: [
            {
                id: 1,
                title: "Commemoration of St. John the Baptist",
                content: [
                    { title: "On this day, ", main: "we commemorate the beheading of St. John the Baptist." },
                    { title: "Historical Context: ", main: "St. John was a prophet who baptized Jesus in the Jordan River." },
                    { title: "Significance: ", main: "This feast is celebrated with special prayers and fasting." }
                ]
            },
            {
                id: 2,
                title: "Departure of St. Mark the Evangelist",
                content: [
                    { title: "On this day, ", main: "we remember the departure of St. Mark the Evangelist." },
                    { title: "Legacy: ", main: "St. Mark founded the Coptic Church in Egypt." }
                ]
            },
            // ... other days
        ],
    },
    "Tikimt": {
        days: [
            {
                id: 1,
                title: "Commemoration of St. Michael",
                content: [
                    { title: "Feast Day: ", main: "We celebrate the feast of Archangel Michael." },
                    { title: "Protection: ", main: "St. Michael is considered the protector of the faithful." }
                ]
            },
            {
                id: 2,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            // ... other days
        ],
    },
    "Hidar": {
        days: [
            {
                id: 1,
                title: "Commemoration of St. Michael",
                content: [
                    { title: "Feast Day: ", main: "We celebrate the feast of Archangel Michael." },
                    { title: "Protection: ", main: "St. Michael is considered the protector of the faithful." }
                ]
            },
            {
                id: 2,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            // ... other days
        ],
    },
    "Tahsas": {
        days: [
            {
                id: 1,
                title: "Commemoration of St. Michael",
                content: [
                    { title: "Feast Day: ", main: "We celebrate the feast of Archangel Michael." },
                    { title: "Protection: ", main: "St. Michael is considered the protector of the faithful." }
                ]
            },
            {
                id: 2,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            // ... other days
        ],
    },
    "Tir": {
        days: [
            {
                id: 1,
                title: "Commemoration of St. Michael",
                content: [
                    { title: "Feast Day: ", main: "We celebrate the feast of Archangel Michael." },
                    { title: "Protection: ", main: "St. Michael is considered the protector of the faithful." }
                ]
            },
            {
                id: 2,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            // ... other days
        ],
    },
    "Yekatit": {
        days: [
            {
                id: 1,
                title: "Commemoration of St. Michael",
                content: [
                    { title: "Feast Day: ", main: "We celebrate the feast of Archangel Michael." },
                    { title: "Protection: ", main: "St. Michael is considered the protector of the faithful." }
                ]
            },
            {
                id: 2,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            // ... other days
        ],
    },
    "Megabit": {
        days: [
            {
                id: 1,
                title: "Commemoration of St. Michael",
                content: [
                    { title: "Feast Day: ", main: "We celebrate the feast of Archangel Michael." },
                    { title: "Protection: ", main: "St. Michael is considered the protector of the faithful." }
                ]
            },
            {
                id: 2,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            // ... other days
        ],
    },
    "Miazia": {
        days: [
            {
                id: 1,
                title: "Commemoration of St. Michael",
                content: [
                    { title: "Feast Day: ", main: "We celebrate the feast of Archangel Michael." },
                    { title: "Protection: ", main: "St. Michael is considered the protector of the faithful." }
                ]
            },
            {
                id: 2,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            // ... other days
        ],
    },
    "Ginbot": {
        days: [
            {
                id: 1,
                title: "Commemoration of St. Michael",
                content: [
                    { title: "Feast Day: ", main: "We celebrate the feast of Archangel Michael." },
                    { title: "Protection: ", main: "St. Michael is considered the protector of the faithful." }
                ]
            },
            {
                id: 2,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            // ... other days
        ],
    },
    "Sene": {
        days: [
            {
                id: 11,
                title: "Commemoration of St. Michael",
                content: [
                    { title: "Feast Day: ", main: "We celebrate the feast of Archangel Michael." },
                    { title: "Protection: ", main: "St. Michael is considered the protector of the faithful." }
                ]
            },
            {
                id: 2,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            // ... other days
        ],
    },
    "Hamle": {
        days: [
            {
                id: 1,
                title: "Commemoration of St. Michael",
                content: [
                    { title: "Feast Day: ", main: "We celebrate the feast of Archangel Michael." },
                    { title: "Protection: ", main: "St. Michael is considered the protector of the faithful." }
                ]
            },
            {
                id: 2,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            {
                id: 3,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            {
                id: 4,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            {
                id: 5,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            {
                id: 6,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            {
                id: 7,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            {
                id: 8,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            {
                id: 9,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            {
                id: 10,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            {
                id: 11,
                title: "Commemoration of St. Michael",
                content: [
                    { title: "Feast Day: ", main: "We celebrate the feast of Archangel Michael." },
                    { title: "Protection: ", main: "St. Michael is considered the protector of the faithful." }
                ]
            },
            {
                id: 12,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            {
                id: 13,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            {
                id: 14,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            {
                id: 15,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            {
                id: 16,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            {
                id: 17,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            {
                id: 18,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            {
                id: 19,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            {
                id: 20,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            {
                id: 21,
                title: "Commemoration of St. Michael",
                content: [
                    { title: "Feast Day: ", main: "We celebrate the feast of Archangel Michael." },
                    { title: "Protection: ", main: "St. Michael is considered the protector of the faithful." }
                ]
            },
            {
                id: 22,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            {
                id: 23,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            {
                id: 24,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            {
                id: 25,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            {
                id: 26,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            {
                id: 27,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            {
                id: 28,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            {
                id: 29,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            {
                id: 30,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            // ... other days
        ],
    },
    "Nehasse": {
        days: [
            {
                id: 4,
                title: "#የነሐሴ_4_ግጻዌ",
                content: [
                    { title: "1ኛ ቆሮንቶስ 8", main: "¹ ለጣዖት ስለ ተሠዋ ሥጋም፥ ሁላችን እውቀት እንዳለን እናውቃለን። እውቀት ያስታብያል ፍቅር ግን ያንጻል። \n² ማንም አንዳች የሚያውቅ ቢመስለው ሊያውቅ እንደሚገባው ገና አላወቀም፤ \n³ ማንም ግን እግዚአብሔርን ቢወድ እርሱ በእርሱ ዘንድ የታወቀ ነው። \n⁴ እንግዲህ ለጣዖት የተሠዋውን ሥጋ ስለ መብላት፥ ጣዖት ሁሉ በዓለም ከንቱ እንደ ሆነ ከአንዱም በቀር ማንም አምላክ እንደሌለ እናውቃለን። \n⁵ መቼም ብዙ አማልክትና ብዙ ጌቶች አሉ፤ ነገር ግን በሰማይ ሆነ በምድርም ሆነ አማልክት የተባሉ ምንም ቢኖሩ፥ \n⁶ ለእኛስ ነገር ሁሉ ከእርሱ የሆነ እኛም ለእርሱ የሆንን አንድ አምላክ አብ አለን፥ ነገር ሁሉም በእርሱ በኩል የሆነ እኛም በእርሱ በኩል የሆንን አንድ ጌታ ኢየሱስ ክርስቶስ አለን።\n⁷ ነገር ግን ይህ እውቀት በሁሉ ዘንድ አይገኝም፤ አንዳንዶች ግን ጣዖትን እስከ አሁን ድረስ ስለ ለመዱ፦ ለጣዖት የተሠዋ ነው ብለው ይበላሉና ሕሊናቸው ደካማ ስለ ሆነ ይረክሳል። \n⁸ መብል ግን ወደ እግዚአብሔር አያቀርበንም፤ ባንበላም ምንም አይጎድለንም ብንበላም ምንም አይተርፈንም። \n⁹ ዳሩ ግን ይህ መብታችሁ ለደካሞች ዕንቅፋት እንዳይሆንባቸው ተጠንቀቁ። \n¹⁰ አንተ እውቀት ያለህ በጣዖት ቤት በማዕድ ስትቀመጥ አንድ ሰው ቢያይህ፥ ደካማ ሰው ቢሆን ለጣዖት የተሠዋውን ለመብላት ሕሊናው አይታነጽበትምን? \n¹¹ በአንተ እውቀትም ይህ ደካማ ይጠፋል፥ እርሱም ክርስቶስ የሞተለት ወንድም ነው። \n¹² እንዲህም ወንድሞችን እየበደላችሁ ደካማም የሆነውን ሕሊናቸውን እያቆሰላችሁ ክርስቶስን ትበድላላችሁ። \n¹³ ስለዚህም መብል ወንድሜን የሚያሰናክለው ከሆነ፥ ወንድሜን እንዳላሰናክለው ለዘላለም ከቶ ሥጋ አልበላም። \n" },
                    { title: "1ኛ ጴጥሮስ 4", main: "¹-² ክርስቶስም በሥጋ ስለ እኛ መከራን ስለተቀበለ፥ ከእንግዲህ ወዲህ በሥጋ ልትኖሩ በቀረላችሁ ዘመን እንደ እግዚአብሔር ፈቃድ እንጂ እንደ ሰው ምኞት እንዳትኖሩ፥ እናንተ ደግሞ ያን አሳብ እንደ ዕቃ ጦር አድርጋችሁ ያዙት፥ በሥጋ መከራን የተቀበለ ኃጢአትን ትቶአልና። \n³ የአሕዛብን ፈቃድ ያደረጋችሁበት በመዳራትና በሥጋ ምኞትም በስካርም በዘፈንም ያለ ልክም በመጠጣት ነውርም ባለበት በጣዖት ማምለክ የተመላለሳችሁበት ያለፈው ዘመን ይበቃልና። \n⁴ በዚህም ነገር ወደዚያ መዳራት ብዛት ከእነርሱ ጋር ስለማትሮጡ እየተሳደቡ ይደነቃሉ፤ \n⁵ ግን እነርሱ በሕያዋንና በሙታን ላይ ሊፈርድ ለተዘጋጀው መልስ ይሰጣሉ። \n⁶ እንደ ሰዎች በሥጋ እንዲፈረድባቸው በመንፈስ ግን እንደ እግዚአብሔር እንዲኖሩ ስለዚህ ምክንያት ወንጌል ለሙታን ደግሞ ተሰብኮላቸው ነበርና። \n" },
                    { title: "ሐዋርያት 26", main: "¹ አግሪጳም ጳውሎስን፦ ስለ ራስህ ትናገር ዘንድ ተፈቅዶልሃል አለው። በዚያን ጊዜ ጳውሎስ እጁን ዘርግቶ መለሰ እንዲህ ሲል፦ \n²-³ ንጉሥ አግሪጳ ሆይ፥ የአይሁድን ሥርዓት ክርክርንም ሁሉ አጥብቀህ አውቀሃልና በአይሁድ በተከሰስሁበት ነገር ሁሉ ዛሬ በፊትህ ስለምመልስ ራሴን እጅግ እንደ ተመረቀ አድርጌ እቈጥረዋለሁ፤ ስለዚህ በትዕግሥት ትሰማኝ ዘንድ እለምንሃለሁ። \n⁴ ከመጀመሪያ አንሥቶ በሕዝቤ መካከል በኢየሩሳሌም የሆነውን፥ ከታናሽነቴ ጀምሬ የኖርሁትን ኑሮዬን አይሁድ ሁሉ ያውቃሉ፤ \n⁵ ሊመሰክሩ ይወዱ እንደ ሆነ፥ በአምልኮአችን ከሁሉ ይልቅ ሕግን በመጠንቀቅ እንደሚተጋ ወገን ፈሪሳዊ ሆኜ እንደኖርሁ ከጥንት ጀምረው አውቀውኛልና። \n⁶ አሁንም ከእግዚአብሔር ዘንድ ለአባቶቻችን ስለ ተሰጠው ስለ ተስፋ ቃል አለኝታ ልፋረድ ቆሜአለሁ። \n⁷ ወደዚህም ወደ ተስፋ ቃል አሥራ ሁለቱ ወገኖቻችን ሌሊትና ቀን በትጋት እያመለኩ ይደርሱ ዘንድ አለኝታ አላቸው፤ ስለዚህም አለኝታ፥ ንጉሥ አግሪጳ ሆይ፥ ከአይሁድ እከሰሳለሁ። \n⁸ እግዚአብሔር ሙታንን የሚያስነሣ እንደ ሆነ ስለ ምን በእናንተ ዘንድ የማይታመን ነገር ሆኖ ይቈጠራል? \n⁹ እኔም ራሴ የናዝሬቱን የኢየሱስን ስም የሚቃወም እጅግ ነገር አደርግ ዘንድ እንዲገባኝ ይመስለኝ ነበር። \n¹⁰ ይህንም ደግሞ በኢየሩሳሌም አደረግሁት፤ ከካህናት አለቆችም ሥልጣን ተቀብዬ እኔ ከቅዱሳን ብዙዎችን በወኅኒ አሳሰርኋቸው፥ ሲገድሉአቸውም አብሬ ተቸሁ። \n¹¹ በምኵራብም ሁሉ ብዙ ጊዜ እየቀጣሁ ይሰድቡት ዘንድ ግድ አልኋቸው፤ ያለ ልክ ስቈጣባቸውም እስከ ውጭ አገር ከተማዎች ድረስ እንኳ አሳድድ ነበር። \n¹² ስለዚህም ነገ ከካህናት አለቆች ሥልጣንና ትእዛዝ ተቀብዬ ወደ ደማስቆ ስሄድ፥ \n¹³ ንጉሥ ሆይ፥ በመንገድ ሳለሁ እኩል ቀን ሲሆን በዙሪያዬና ከእኔ ጋር በሄዱት ዙሪያ ከፀሐይ ብሩህነት የበለጠ ብርሃን ከሰማይ ሲበራ አየሁ፤ \n¹⁴ ሁላችንም በምድር ላይ በወደቅን ጊዜ፦ ሳውል ሳውል፥ ስለ ምን ታሳድደኛለህ? የመውጊያውን ብረት ብትቃወም ለአንተ ይብስብሃል የሚል ድምፅ በዕብራይስጥ ቋንቋ ሲናገረኝ ሰማሁ። \n¹⁵ እኔም፦ ጌታ ሆይ፥ ማንነህ? አልሁ። እርሱም አለኝ፦ አንተ የምታሳድደኝ እኔ ኢየሱስ ነኝ። \n¹⁶ ነገር ግን ተነሣና በእግርህ ቁም፤ ስለዚህ እኔን ባየህበት ነገር ለአንተም በምታይበት ነገር አገልጋይና ምስክር ትሆን ዘንድ ልሾምህ ታይቼልሃለሁና። \n¹⁷-¹⁸ የኃጢአትንም ስርየት በእኔም በማመን በተቀደሱት መካከል ርስትን ያገኙ ዘንድ፥ ከጨለማ ወደ ብርሃን ከሰይጣንም ሥልጣን ወደ እግዚአብሔር ዘወር እንዲሉ ዓይናቸውን ትከፍት ዘንድ፥ ከሕዝቡና ወደ እነርሱ ከምልክህ ከአሕዛብ አድንሃለሁ። \n¹⁹ ንጉሥ አግሪጳ ሆይ፥ ስለዚህ ከሰማይ የታየኝን ራእይ እምቢ አላልሁም። \n²⁰ ነገር ግን አስቀድሜ በደማስቆ ላሉት በኢየሩሳሌምም በይሁዳም አገር ሁሉ ለአሕዛብም ንስሐ ይገቡ ዘንድና ለንስሐ የሚገባ ነገር እያደረጉ ወደ እግዚአብሔር ዘወር ይሉ ዘንድ ተናገርሁ። \n²¹ ስለዚህ አይሁድ በመቅደስ ያዙኝ ሊገድሉኝም ሞከሩ። \n²²-²³ ከእግዚአብሔርም ዘንድ ረድኤት ተቀብዬ ለታናሹም ለታላቁም ስመሰክር እስከዚች ቀን ድረስ ቆሜአለሁ፤ ነቢያትና ሙሴ ይሆን ዘንድ ያለውን፥ ክርስቶስ መከራን እንዲቀበል በሙታንም ትንሣኤ ለሕዝብና ለአሕዛብ ብርሃንን በመጀመሪያ ሊሰብክ እንዳለው፥ ከተናገሩት በቀር አንድ ስንኳ የተናገርሁት የለም። \n²⁴ እንዲህም ብሎ ስለ ራሱ ሲመልስ ፊስጦስ በታላቅ ድምፅ፦ ጳውሎስ ሆይ፥ አብድሃል እኮ፤ ብዙ ትምህርትህ ወደ እብደት ያዞርሃል አለው። \n²⁵ ጳውሎስ ግን እንዲህ አለ፦ ክቡር ፊስጦስ ሆይ፥ የእውነትንና የአእምሮን ነገር እናገራለሁ እንጂ እብደትስ የለብኝም። \n²⁶ በእርሱ ፊት ደግሞ በግልጥ የምናገረው ንጉሥ ይህን ነገር ያውቃል፤ ከዚህ ነገር አንዳች እንዳይሰወርበት ተረድቼአለሁና፤ ይህ በስውር የተደረገ አይደለምና። \n²⁷ ንጉሥ አግሪጳ ሆይ፥ ነቢያትን ታምናለህን? እንድታምናቸው አውቃለሁ። \n²⁸ አግሪጳም ጳውሎስን፦ በጥቂት ክርስቲያን ልታደርገኝ ትወዳለህ አለው። \n²⁹ ጳውሎስም፦ በጥቂት ቢሆን ወይም በብዙ አንተ ብቻ አይደለህም ነገር ግን ዛሬ የሚሰሙኝ ሁሉ ደግሞ ከዚህ እስራቴ በቀር እንደ እኔ ይሆኑ ዘንድ ወደ እግዚአብሔር እለምናለሁ አለው። \n" },
                    { title: "#ምስባክ", main: "እምነ #ጽዮን ይብል ሰብእ። ወብእሲ ተወልደ? በውስቴታ። ወውእቱ ልዕለ ሣሬራ። \n" },
                    { title: "ትርጉም", main: "ሰው እናታችን ጽዮን ይላል፥ በውስጥዋም ሰው ተወለደ እርሱ ራሱም ልዑል መሠረታት።መዝ.86÷5-6 \n" },
                    { title: "#ወንጌል ሉቃስ 1", main: "³⁹ ማርያምም በዚያ ወራት ተነሥታ ወደ ተራራማው አገር ወደ ይሁዳ ከተማ ፈጥና ወጣች፥\n⁴⁰ ወደ ዘካርያስም ቤት ገብታ ኤልሳቤጥን ተሳለመቻት።\n⁴¹ ኤልሳቤጥም የማርያምን ሰላምታ በሰማች ጊዜ ፅንሱ በማኅፀንዋ ውስጥ ዘለለ፤ በኤልሳቤጥም መንፈስ ቅዱስ ሞላባት፥\n⁴² በታላቅ ድምፅም ጮኻ እንዲህ አለች፦ አንቺ ከሴቶች መካከል የተባረክሽ ነሽ፥ የማኅፀንሽም ፍሬ የተባረከ ነው።\n⁴³ የጌታዬ እናት ወደ እኔ ትመጣ ዘንድ እንዴት ይሆንልኛል?\n⁴⁴ እነሆ፥ የሰላምታሽ ድምጽ በጆሮዬ በመጣ ጊዜ ፅንሱ በማኅፀኔ በደስታ ዘሎአልና።\n⁴⁵ ከጌታ፤ የተነገረላት ቃል ይፈጸማልና ያመነች ብፅዕት ናት።\n" },
                    { title: "✝️ ቅዳሴ", main: " #እግዝእትነ ነው።" }
                ]
            },
            {
                id: 5,
                title: " የነሐሴ 5 ግጻዌ",
                content: [
                    { title: "2ኛ ቆሮ 12", main: " ¹⁰ ስለዚህ ስለ ክርስቶስ በድካም በመንገላታትም በችግርም በስደትም በጭንቀትም ደስ ይለኛል፤ ስደክም ያን ጊዜ ኃይለኛ ነኝና።\n ¹¹ በመመካቴ ሞኝ ሆኜአለሁ፤ እናንተ ግድ አላችሁኝ፤ እናንተ እኔን ልታመሰግኑ ይገባ ነበርና። እኔ ምንም ባልሆን እንኳ፥ ከዋነኞቹ ሐዋርያት በምንም አልጎድልምና።\n¹² በእርግጥ የሐዋርያነት ምልክት በመካከላችሁ በምልክትና በድንቅ ነገር በተአምራትም በሁሉ ትዕግሥት ተደረገ።\n¹³ እኔ ራሴ ካልከበድሁባችሁ ከዚህ በቀር፥ ከሌላ ቤተ ክርስቲያን ያነሳችሁበት በምን እኮ ነው? ይህን በደሌን ይቅር በሉልኝ።\n¹⁴ እነሆ፥ ወደ እናንተ እመጣ ዘንድ ስዘጋጅ ይህ ሦስተኛዬ ነው፤ አልከብድባችሁምም፥ እናንተን እንጂ ያላችሁን አልፈልግምና። ወላጆች ለልጆች እንጂ ልጆች ለወላጆች ገንዘብ ሊያከማቹ አይገባቸውምና።\n¹⁵ እኔ ግን ስለ ነፍሳችሁ በብዙ ደስታ ገንዘቤን እከፍላለሁ፥ ራሴን እንኳ እከፍላለሁ። ከመጠን ይልቅ ብወዳችሁ በዚህ ልክ ፍቅራችሁ የሚያንስ ነውን?\n¹⁶ ይሁን እንጂ እኔ አልከበድሁባችሁም፤ ነገር ግን ሸንጋይ ሆኜ በተንኰል ያዝኋችሁ። \n¹⁷ ወደ እናንተ ከላክኋቸው በአንዱ ስንኳ አታለልኋችሁን?\ን" },
                    { title: "1ኛ ዮሐንስ 5", main: "¹⁴ በእርሱ ዘንድ ያለን ድፍረት ይህ ነው፤ እንደ ፈቃዱ አንዳች ብንለምን ይሰማናል።\n¹⁵ የምንለምነውንም ሁሉ እንዲሰማልን ብናውቅ ከእርሱ የለመነውን ልመና እንደ ተቀበልን እናውቃለን።\n¹⁶ ማንም ወንድሙን ሞት የማይገባውን ኃጢአት ሲያደርግ ቢያየው ይለምን፥ ሞትም የማይገባውን ኃጢአት ላደረጉት ሕይወት ይሰጥለታል። ሞት የሚገባው ኃጢአት አለ፤ ስለዚያ እንዲጠይቅ አልልም።\n¹⁷ ዓመፃ ሁሉ ኃጢአት ነው፥ ሞትም የማይገባው ኃጢአት አለ።\n¹⁸ ከእግዚአብሔር የተወለደ ሁሉ ኃጢአትን እንዳያደርግ፥ ነገር ግን ከእግዚአብሔር የተወለደው ራሱን እንዲጠብቅ ክፉውም እንዳይነካው እናውቃለን።\n¹⁹ ከእግዚአብሔር እንደ ሆንን ዓለምም በሞላው በክፉው እንደ ተያዘ እናውቃለን።\n²⁰ የእግዚአብሔርም ልጅ እንደ መጣ፥ እውነተኛም የሆነውን እናውቅ ዘንድ ልቡናን እንደ ሰጠን እናውቃለን፤ እውነተኛም በሆነው በእርሱ አለን፥ እርሱም ልጁ ኢየሱስ ክርስቶስ ነው። እርሱ እውነተኛ አምላክና የዘላለም ሕይወት ነው።\n²¹ ልጆች ሆይ፥ ከጣዖታት ራሳችሁን ጠብቁ። \n" },
                    { title: "ሐዋርያት 15", main: "¹ አንዳንዶችም ከይሁዳ ወረዱና፦ እንደ ሙሴ ሥርዓት ካልተገረዛችሁ ትድኑ ዘንድ አትችሉም ብለው ወንድሞችን ያስተምሩ ነበር።\n² በእነርሱና በጳውሎስ በበርናባስም መካከል ብዙ ጥልና ክርክር በሆነ ጊዜ፥ ስለዚህ ክርክር ጳውሎስና በርናባስ ከእነርሱም አንዳንዶች ሌሎች ሰዎች ወደ ሐዋርያት ወደ ሽማግሌዎችም ወደ ኢየሩሳሌም ይወጡ ዘንድ ተቈረጠ።\n³ ቤተ ክርስቲያኑም በመንገድ እየረዳቸው እነርሱ የአሕዛብን መመለስ እየተረኩ በፊንቄና በሰማርያ አለፉ፥ ወንድሞችንም ሁሉ እጅግ ደስ አሰኙአቸው።\n⁴ ወደ ኢየሩሳሌምም በደረሱ ጊዜ ቤተ ክርስቲያንና ሐዋርያት ሽማግሌዎችም ተቀበሉአቸው፥ እግዚአብሔርም ከእነርሱ ጋር ያደረገውን ሁሉ አወሩ።\n⁵ ከፈሪሳውያን ወገን ግን ያመኑት አንዳንዶቹ ተነሥተው፦ ትገርዙአቸው ዘንድና የሙሴን ሕግ እንዲጠብቁ ታዙአቸው ዘንድ ይገባል አሉ።\n⁶ ሐዋርያትና ሽማግሌዎችም ስለዚህ ነገር ለመማከር ተሰበሰቡ።\n⁷ ከብዙ ክርክርም በኋላ ጴጥሮስ ተነሥቶ እንዲህ አላቸው ወንድሞች ሆይ፥ አሕዛብ ከአፌ የወንጌልን ቃል ሰምተው ያምኑ ዘንድ እግዚአብሔር በመጀመሪያው ዘመን ከእናንተ እኔን እንደ መረጠኝ እናንተ ታውቃላችሁ። \n⁸ ልብንም የሚያውቅ አምላክ ለእኛ ደግሞ እንደ ሰጠን መንፈስ ቅዱስን በመስጠት መሰከረላቸው፤\n⁹ ልባቸውንም በእምነት ሲያነጻ በእኛና በእነርሱ መካከል አንዳች አልለየም።\n¹⁰ እንግዲህ አባቶቻችንና እኛ ልንሸከመው ያልቻልነውን ቀንበር በደቀ መዛሙርት ጫንቃ ላይ በመጫን እግዚአብሔርን አሁን ስለ ምን ትፈታተናላችሁ?\n¹¹ ነገር ግን በጌታ በኢየሱስ ክርስቶስ ጸጋ እንደ እነርሱ ደግሞ እንድን ዘንድ እናምናለን። \n¹² ሕዝቡም ሁሉ ዝም አሉ፥ በርናባስና ጳውሎስም እግዚአብሔር በእጃቸው በአሕዛብ መካከል ያደረገውን ምልክትና ድንቅ ሁሉ ሲተርኩላቸው ይሰሙ ነበር።\n" },
                    { title: " #ምስባክ👇", main: "ወትሠይመኒ ውስተ ርእሰ ሕዝብ። ሕዝብ ዘኢየአምር ተቀንየ ሊተ። ውስተ ምስማዐ ዕዝን ተሠጥዉኒ" },
                    { title: "ትርጉም", main: " ከሕዝብ ክርክር ታድነኛለህ፥ የአሕዛብም ራስ አድርገህ ትሾመኛለህ፥ የማላውቀው ሕዝብም ይገዛልኛል። በጆሮ ሰምተው ተገዙልኝ፤ የባዕድ ልጆች ደለሉኝ። መዝ.17÷43-44 " },
                    { title: "📖 ወንጌል ሉቃስ 15", main: "¹ ቀራጮችና ኃጢአተኞችም ሁሉ ሊሰሙት ወደ እርሱ ይቀርቡ ነበር።\n ² ፈሪሳውያንና ጻፎችም፦ ይህስ ኃጢአተኞችን ይቀበላል ከእነርሱም ጋር ይበላል ብለው እርስ በርሳቸው አንጐራጐሩ።\n ³ ይህንም ምሳሌ ነገራቸው እንዲህ ሲል፦\n ⁴ መቶ በግ ያለው ከእነርሱም አንዱ ቢጠፋ፥ ዘጠና ዘጠኙን በበረሃ ትቶ የጠፋውን እስኪያገኘው ድረስ ሊፈልገው የማይሄድ ከእናንተ ማን ነው?\n ⁵ ባገኘውም ጊዜ ደስ ብሎት በጫንቃው ይሸከመዋል፤\n ⁶ ወደ ቤትም በመጣ ጊዜ ወዳጆቹንና ጐረቤቶቹን በአንድነት ጠርቶ፦ የጠፋውን በጌን አግኝቼዋለሁና ከእኔ ጋር ደስ ይበላችሁ ይላቸዋል።\n ⁷ እላችኋለሁ፥ እንዲሁ ንስሐ ከማያስፈልጋቸው ከዘጠና ዘጠኝ ጻድቃን ይልቅ ንስሐ በሚገባ በአንድ ኃጢአተኛ በሰማይ ደስታ ይሆናል።\n ⁸ ወይም አሥር ድሪም ያላት አንድ ድሪም ቢጠፋባት፥ መብራት አብርታ ቤትዋንም ጠርጋ እስክታገኘው ድረስ አጥብቃ የማትፈልግ ሴት ማን ናት?\n ⁹ ባገኘችውም ጊዜ ወዳጆችዋንና ጐረቤቶችዋን በአንድነት ጠርታ፦ የጠፋውን ድሪሜን አግኝቼዋለሁና ከእኔ ጋር ደስ ይበላችሁ ትላቸዋለች።\n ¹⁰ እላችኋለሁ፥ እንዲሁ ንስሐ በሚገባ በአንድ ኃጢአተኛ በእግዚአብሔር መላእክት ፊት ደስታ ይሆናል።\n " },
                    { title: "✝️ ቅዳሴ", main: " #እመቤታችን_የማርያም_ቅዳሴ ነው። የ #እናታችን_የእመቤታችን_የቅድስት_ድንግል_ማርያም_ወላዲተ_አምላክ ፍቅሯ በልባችን ጣዕሟ ባንደበታችን ይደርብን!!! " }
                ]
            },
            {
                id: 6,
                title: "#የነሐሴ 6ግጻዌ",
                content: [

                    { title: "1ኛ ቆሮንቶስ 3", main: "¹⁰ የእግዚአብሔር ጸጋ እንደ ተሰጠኝ መጠን እንደ ብልሃተኛ የአናጺ አለቃ መሠረትን መሠረትሁ፥ ሌላውም በላዩ ያንጻል። እያንዳንዱ ግን በእርሱ ላይ እንዴት እንዲያንጽ ይጠንቀቅ።\n¹¹ ከተመሠረተው በቀር ማንም ሌላ መሠረት ሊመሠርት አይችልምና፥ እርሱም ኢየሱስ ክርስቶስ ነው።\n¹² ማንም ግን በዚህ መሠረት ላይ በወርቅ ቢሆን በብርም በከበረ ድንጋይም በእንጨትም በሣርም ወይም በአገዳ ቢያንጽ፥ የእያንዳንዱ ሥራ ይገለጣል፤\n¹³ በእሳት ስለሚገለጥ ያ ቀን ያሳያልና፥ የእያንዳንዱም ሥራ እንዴት መሆኑን እሳቱ ይፈትነዋል።\n¹⁴ ማንም በእርሱ ላይ ያነጸው ሥራ ቢጸናለት ደመወዙን ይቀበላል፤\n¹⁵ የማንም ሥራ የተቃጠለበት ቢሆን ይጎዳበታል፥ እርሱ ራሱ ግን ይድናል ነገር ግን በእሳት እንደሚድን ይሆናል።\n¹⁶ የእግዚአብሔር ቤተ መቅደስ እንደ ሆናችሁ የእግዚአብሔርም መንፈስ እንዲኖርባችሁ አታውቁምን?\n¹⁷ ማንም የእግዚአብሔርን ቤተ መቅደስ ቢያፈርስ እግዚአብሔር እርሱን ያፈርሰዋል፤ የእግዚአብሔር ቤተ መቅደስ ቅዱስ ነውና፥ ያውም እናንተ ናችሁ።\n¹⁸ ማንም ራሱን አያታልል፤ ከእናንተ ማንም በዚች ዓለም ጥበበኛ የሆነ ቢመስለው ጥበበኛ ይሆን ዘንድ ሞኝ ይሁን።\n¹⁹-²⁰ የዚህች ዓለም ጥበብ በእግዚአብሔር ፊት ሞኝነት ነውና። እርሱ ጥበበኞችን በተንኰላቸው የሚይዝ፤ ደግሞም፦ ጌታ የጥበበኞችን አሳብ ከንቱ እንደ ሆነ ያውቃል ተብሎ ተጽፎአልና።\n²¹ ስለዚህም ማንም በሰው አይመካ። ነገር ሁሉ የእናንተ ነውና፤\n" },
                    { title: "1ኛ ጴጥሮስ 3", main: "¹-² እንዲሁም፥ እናንተ ሚስቶች ሆይ፥ ከባሎቻችሁ አንዳንዱ ለትምህርት የማይታዘዙ ቢኖሩ፥ በፍርሃት ያለውን ንጹሑን ኑሮአችሁን እየተመለከቱ ያለ ትምህርት በሚስቶቻቸው ኑሮ እንዲገኙ ተገዙላቸው።\n³ ለእናንተም ጠጕርን በመሸረብና ወርቅን በማንጠልጠል ወይም ልብስን በመጎናጸፍ በውጭ የሆነ ሽልማት አይሁንላችሁ፥\n⁴ ነገር ግን በእግዚአብሔር ፊት ዋጋው እጅግ የከበረ የዋህና ዝግተኛ መንፈስ ያለውን የማይጠፋውን ልብስ ለብሶ የተሰወረ የልብ ሰው ይሁንላችሁ።\n⁵ እንዲህ በቀድሞ ዘመን በእግዚአብሔር ተስፋ ያደረጉት ቅዱሳት ሴቶች ደግሞ ለባሎቻቸው ሲገዙ ተሸልመው ነበርና፤\n⁶ እንዲሁም ሣራ ለአብርሃም፦ ጌታ ብላ እየጠራችው ታዘዘችለት፤ እናንተም ከሚያስደነግጥ ነገር አንዳች እንኳ ሳትፈሩ መልካም ብታደርጉ ልጆችዋ ናችሁ።\n⁷ እንዲሁም፥ እናንተ ባሎች ሆይ፥ ደካማ ፍጥረት ስለ ሆኑ ከሚስቶቻችሁ ጋር በማስተዋል አብራችሁ ኑሩ፤ ጸሎታችሁ እንዳይከለከል አብረው ደግሞ የሕይወትን ጸጋ እንደሚወርሱ አድርጋችሁ አክብሩአቸው።\n" },
                    { title: "ሐዋርያት 16", main: "¹³ በሰንበት ቀንም ከከተማው በር ውጭ የጸሎት ስፍራ በዚያ መሆኑን ስላሰብን ወደ ወንዝ አጠገብ ወጣን፤ ተቀምጠንም ለተሰበሰቡት ሴቶች ተናገርን።\n¹⁴ ከትያጥሮን ከተማም የመጣች ቀይ ሐር ሻጭ እግዚአብሔርን የምታመልክ ልድያ የሚሉአት አንዲት ሴት ትሰማ ነበረች፤ ጳውሎስም የሚናገረውን ታዳምጥ ዘንድ ጌታ ልብዋን ከፈተላት።\n¹⁵ እርስዋም ከቤተ ሰዎችዋ ጋር ከተጠመቀች በኋላ፦ በጌታ የማምን እንድሆን ከፈረዳችሁልኝ፥ ወደ ቤቴ ገብታችሁ ኑሩ ብላ ለመነችን፤ በግድም አለችን።\n¹⁶ ወደ ጸሎት ስፍራም ስንሄድ፥ የምዋርተኝነት መንፈስ የነበረባት ለጌቶችዋም እየጠነቈለች ብዙ ትርፍ ታመጣ የነበረች አንዲት ገረድ አገኘችን።\n¹⁷ እርስዋ ጳውሎስንና እኛን እየተከተለች፦ የመዳንን መንገድ የሚነግሩአችሁ እነዚህ ሰዎች የልዑል አምላክ ባሪያዎች ናቸው ብላ ትጮኽ ነበር።\n¹⁸ ይህንም እጅግ ቀን አደረገች። ጳውሎስ ግን ተቸገረና ዘወር ብሎ መንፈሱን፦ ከእርስዋ እንድትወጣ በኢየሱስ ክርስቶስ ስም አዝሃለሁ አለው፤ በዚያም ሰዓት ወጣ።\n" },
                    { title: "#ምስባክ", main: "ወይሰግዱ ሎቱ አዋልደ ጢሮስ በአምኃ። ወለገጽኪ ይትመሐለሉ ኵሎሙ አሕዛብ ብዑላነ ምድር። ኵሉ ክብራ ለወለተ ንጉሠ ሐሴቦን።" },
                    { title: "ትርጉም፣", main: "#የጢሮስ ሴቶች ልጆች እጅ መንሻን ይዘው ይሰግዱለታል። የምድር ባለጠጎች አሕዛብ በፊትህ ይማለላሉ። ለሐሴቦን ንጉሥ ልጅ ሁሉ ክብርዋ ነው፤ ልብስዋ የወርቅ መጐናጸፊያ ነው።\nመዝ.44÷12-13 " },
                    { title: "📖 ወንጌል ማርቆስ 16", main: " ⁹ ከሳምንቱም በመጀመሪያው ቀን ማልዶ በተነሣ ጊዜ፥ አስቀድሞ ሰባት አጋንንት ላወጣላት ለመግደላዊት ማርያም ታየ። \n¹⁰ እርስዋ ሄዳ ከእርሱ ጋር ሆነው ለነበሩት ሲያዝኑና ሲያለቅሱ ሳሉ አወራችላቸው፤\n¹¹ እነርሱም ሕያው እንደ ሆነ ለእርስዋም እንደ ታያት ሲሰሙ አላመኑም።\n ¹² ከዚህም በኋላ ከእነርሱ ለሁለቱ ወደ ባላገር ሲሄዱ በመንገድ በሌላ መልክ ተገለጠ፤\n¹³ እነርሱም ሄደው ለሌሎቹ አወሩ፤ እነዚያንም ደግሞ አላመኑአቸውም።\n ¹⁴ ኋላም በማዕድ ተቀምጠው ሳሉ ለአሥራ አንዱ ተገለጠ፥ ተነሥቶም ያዩትን ስላላመኑአቸው አለማመናቸውንና የልባቸውን ጥንካሬ ነቀፈ።\n¹⁵ እንዲህም አላቸው፦ ወደ ዓለም ሁሉ ሂዱ ወንጌልንም ለፍጥረት ሁሉ ስበኩ።\n¹⁶ ያመነ የተጠመቀም ይድናል፥ ያላመነ ግን ይፈረድበታል።\n¹⁷ ያመኑትንም እነዚህ ምልክቶች ይከተሉአቸዋል፤ በስሜ አጋንንትን ያወጣሉ፤ በአዲስ ቋንቋ ይናገራሉ፤ እባቦችን ይይዛሉ፥\n¹⁸ የሚገድልም ነገር ቢጠጡ አይጎዳቸውም፤ እጃቸውን በድውዮች ላይ ይጭናሉ እነርሱም ይድናሉ።\n¹⁹ ጌታ ኢየሱስም ከእነርሱ ጋር ከተናገረ በኋላ ወደ ሰማይ ዐረገ በእግዚአብሔርም ቀኝ ተቀመጠ።\n" },
                    { title: "✝️ ቅዳሴ", main: " #እግዝእትነ  ነው።\n #የእናታችን_የእመቤታችን_የቅድስት_ድንግል_ማርያም_ወላዲተ_አምላክ ፍቅሯ በልባችን ጣዕሟ ባንደበታችን ይደርብን!!!" }
                ]
            },
            {
                id: 7,
                title: "ግጻዌ ዘወርኅ ነሐሴ ፯/ የነሐሴ 7 ግጻዌ",
                content: [
                    { title: "ዕብራውያን 9", main: " ¹ ፊተኛይቱም ደግሞ የአገልግሎት ስርዓትና የዚህ ዓለም የሆነው መቅደስ ነበራት።\n ² የመጀመሪያይቱ ድንኳን ተዘጋጅታ ነበርና፥ በእርስዋም ቅድስት በምትባለው ውስጥ መቅረዙና ጠረጴዛው የመስዋዕቱም ኅብስት ነበረባት፤\n ³ ከሁለተኛውም መጋረጃ ወዲያ ቅድስተ ቅዱሳን የምትባለው ድንኳን ነበረች፥\n ⁴ በዚያም ውስጥ የወርቅ ማዕጠንት ነበረ ሁለንተናዋም በወርቅ የተለበጠች የኪዳን ታቦት፤ በእርስዋም ውስጥ መና ያለባት የወርቅ መሶብና የበቀለች የአሮን በትር የኪዳኑም ጽላት ነበሩ፥\n ⁵ በላይዋም ማስተስሪያውን የሚጋርዱ የክብር ኪሩቤል ነበሩ፤ ስለ እነዚህም ስለ እያንዳንዳቸው ልንናገር አሁን አንችልም።\n ⁶ ይህም እንደዚህ ተዘጋጅቶ ሳለ፥ ካህናት አገልግሎታቸውን እየፈጸሙ ዘወትር በፊተኛይቱ ድንኳን ይገቡባታል፤\n ⁷ በሁለተኛይቱ ግን ሊቀ ካህናት ብቻውን በዓመት አንድ ጊዜ ይገባባታል፥ እርሱም ስለ ራሱና ስለ ሕዝቡ ስሕተት የሚያቀርበውን ደም ሳይዝ አይገባም፤\n ⁸ ፊተኛይቱም ድንኳን በዚህ ገና ቆማ ሳለች፥ ወደ ቅድስት የሚወስደው መንገድ ገና እንዳልተገለጠ መንፈስ ቅዱስ ያሳያል።\n ⁹-¹⁰ ይህም ለአሁኑ ጊዜ ምሳሌ ነው፥ እንደዚህም መባና መስዋዕት ይቀርባሉ፤ እነዚህም እስከ መታደስ ዘመን ድረስ የተደረጉ፥ ስለ ምግብና ስለ መጠጥም ስለ ልዩ ልዩ መታጠብም የሚሆኑ የሥጋ ሥርዓቶች ብቻ ናቸውና የሚያመልከውን በህሊና ፍጹም ሊያደርጉት አይችሉም።\n ¹¹ ነገር ግን ክርስቶስ ይመጣ ዘንድ ላለው መልካም ነገር ሊቀ ካህናት ሆኖ፥ በምትበልጠውና በምትሻለው በእጆችም ባልተሠራች ማለት ለዚህ ፍጥረት ባልሆነች ድንኳን፥\n ¹² የዘላለምን ቤዛነት አግኝቶ አንድ ጊዜ ፈጽሞ ወደ ቅድስት በገዛ ደሙ ገባ እንጂ በፍየሎችና በጥጆች ደም አይደለም።" },
                    { title: "1ኛ ጴጥሮስ 2", main: "⁶ በመጽሐፍ፦ እነሆ፥ የተመረጠና የከበረን የማዕዘን ራስ ድንጋይ በጽዮን አኖራለሁ በእርሱም የሚያምን አያፍርም ተብሎ ተጽፎአልና።\n ⁷ እንግዲህ ክብሩ ለእናንተ ለምታምኑት ነው፤ ለማያምኑ ግን አናጢዎች የጣሉት ድንጋይ እርሱ የማዕዘን ራስ የዕንቅፋትም ድንጋይ የማሰናከያም ዓለት ሆነ፤\n ⁸ የማያምኑ ስለ ሆኑ በቃሉ ይሰናከሉበታልና፤ ለዚህ ደግሞ የተመደቡ ናቸው።\n ⁹ እናንተ ግን ከጨለማ ወደሚደነቅ ብርሃኑ የጠራችሁን የእርሱን በጎነት እንድትናገሩ የተመረጠ ትውልድ፥ የንጉሥ ካህናት፥ ቅዱስ ሕዝብ፥ ለርስቱ የተለየ ወገን ናችሁ፤\n ¹⁰ እናንተ ቀድሞ ወገን አልነበራችሁም አሁን ግን የእግዚአብሔር ወገን ናችሁ፤ እናንተ ምሕረት ያገኛችሁ አልነበራችሁም አሁን ግን ምሕረትን አግኝታችኋል።\n ¹¹ ወዳጆች ሆይ፥ ነፍስን ከሚዋጋ ሥጋዊ ምኞት ትርቁ ዘንድ እንግዶችና መጻተኞች እንደ መሆናችሁ እለምናችኋለሁ፤\n ¹² ስለሚመለከቱት ስለ መልካም ሥራችሁ፥ ክፉ እንደምታደርጉ በዚያ እናንተን በሚያሙበት ነገር፥ በሚጎበኝበት ቀን እግዚአብሔርን ያከብሩት ዘንድ በአሕዛብ መካከል ኑሮአችሁ መልካም ይሁን።\n ¹³ ስለ ጌታ ብላችሁ ለሰው ሥርዓት ሁሉ ተገዙ፤ ለንጉሥም ቢሆን፥ ከሁሉ በላይ ነውና፤\n ¹⁴ ለመኳንንትም ቢሆን፥ ክፉ የሚያደርጉትን ለመቅጣት በጎም የሚያደርጉትን ለማመስገን ከእርሱ ተልከዋልና ተገዙ።\n ¹⁵ በጎ እያደረጋችሁ፥ የማያውቁትን ሞኞች ዝም ታሰኙ ዘንድ እንዲህ የእግዚአብሔር ፈቃድ ነውና፤\n ¹⁶ አርነት ወጥታችሁ እንደ እግዚአብሔር ባሪያዎች ሁኑ እንጂ ያ አርነት ለክፋት መሸፈኛ እንዲሆን አታድርጉ።" },
                    { title: "ሐዋርያት 10", main: "¹ በቂሣርያም ኢጣሊቄ ለሚሉት ጭፍራ የመቶ አለቃ የሆነ ቆርኔሌዎስ የሚሉት አንድ ሰው ነበረ።\n² እርሱም ከቤተ ሰዎቹ ሁሉ ጋር እግዚአብሔርን የሚያመልክና የሚፈራ ለሕዝብም እጅግ ምጽዋት የሚያደርግ ወደ እግዚአብሔርም ሁልጊዜ የሚጸልይ ነበረ።\n³ ከቀኑም ዘጠኝ ሰዓት ያህል፦ ቆርኔሌዎስ ሆይ የሚለው የእግዚአብሔር መልአክ ወደ እርሱ ሲገባ በራእይ በግልጥ አየው።\n⁴ እርሱም ትኵር ብሎ ሲመለከተው ደንግጦ፦ ጌታ ሆይ፥ ምንድር ነው ? አለ። መልአኩም አለው፦ ጸሎትህና ምጽዋትህ በእግዚአብሔር ፊት ለመታሰቢያ እንዲሆን አረገ።\n⁵ አሁንም ወደ ኢዮጴ ሰዎችን ልከህ ጴጥሮስ የሚባለውን ስምዖንን አስመጣ።\n⁶ እርሱ ቤቱ በባሕር አጠገብ ባለው በቍርበት ፋቂው በስምዖን ዘንድ እንግድነት ተቀምጦአል፤ ልታደርገው የሚገባህን እርሱ ይነግርሃል።\n⁷ የተናገረውም መልአክ በሄደ ጊዜ፥ ከሎሌዎቹ ሁለቱን፥ ከማይለዩትም ጭፍሮቹ እግዚአብሔርን የሚያመልክ አንዱን ወታደር ጠርቶ፥\n⁸ ነገሩን ሁሉ ተረከላቸው ወደ ኢዮጴም ላካቸው።\n⁹ እነርሱም በነገው ሲሄዱ ወደ ከተማም ሲቀርቡ፥ ጴጥሮስ በስድስት ሰዓት ያህል ይጸልይ ዘንድ ወደ ጣራው ወጣ።\n¹⁰ ተርቦም ሊበላ ወደደ፤ ሲያዘጋጁለት ሳሉም ተመስጦ መጣበት፤¹¹ ሰማይም ተከፍቶ በአራት ማዕዘን የተያዘ ታላቅ ሸማ የሚመስል ዕቃ ወደ ምድር ሲወርድ አየ፤\n¹² በዚያውም አራት እግር ያላቸው ሁሉ አራዊትም በምድርም የሚንቀሳቀሱት የሰማይ ወፎችም ነበሩበት።\n¹³ ጴጥሮስ ሆይ፥ ተነሣና አርደህ ብላ የሚልም ድምፅ ወደ እርሱ መጣ።\n¹⁴ ጴጥሮስ ግን፦ ጌታ ሆይ፥ አይሆንም፤ አንዳች ርኵስ የሚያስጸይፍም ከቶ በልቼ አላውቅምና አለ።\n¹⁵ ደግሞም ሁለተኛ፦ እግዚአብሔር ያነጻውን አንተ አታርክሰው የሚል ድምፅ ወደ እርሱ መጣ።\n¹⁶ ይህም ሦስት ጊዜ ሆነ፥ ወዲያውም ዕቃው ወደ ሰማይ ተወሰደ።\n¹⁷ ጴጥሮስም ስላየው ራእይ፦ ምን ይሆን ? ብሎ በልቡ ሲያመነታ፥ እነሆ፥ ቆርኔሌዎስ የላካቸው ሰዎች ስለ ስምዖን ቤት ጠይቀው ወደ ደጁ ቀረቡ፤\n¹⁸ ድምፃቸውንም ከፍ አድርገው፦ ጴጥሮስ የተባለው ስምዖን በዚህ እንግድነት ተቀምጦአልን ? ብለው ይጠይቁ ነበር።\n¹⁹ ጴጥሮስም ስለ ራእዩ ሲያወጣ ሲያወርድ ሳለ፥ መንፈስ፦ እነሆ፥ ሦስት ሰዎች ይፈልጉሃል፤\n²⁰ ተነሥተህ ውረድ፥ እኔም ልኬአቸዋለሁና ሳትጠራጠር ከእነርሱ ጋር ሂድ አለው።\n²¹ ጴጥሮስም ወደ ሰዎቹ ወርዶ፦ እነሆ፥ የምትፈልጉኝ እኔ ነኝ፤ የመጣችሁበትስ ምክንያት ምንድር ነው ? አላቸው።\n²² እነርሱም፦ ጻድቅ ሰው እግዚአብሔርንም የሚፈራ በአይሁድም ሕዝብ ሁሉ የተመሰከረለት የመቶ አለቃ ቆርኔሌዎስ ወደ ቤቱ ያስመጣህ ዘንድ ከአንተም ቃልን ይሰማ ዘንድ ከቅዱስ መልአክ ተረዳ አሉት። \n ²³ እርሱም ወደ ውስጥ ጠርቶ እንድግድነት ተቀበላቸው። በነገውም ተነሥቶ ከእነርሱ ጋር ወጣ፥ በኢዮጴም ከነበሩት ወንድሞች አንዳንዶቹ ከእርሱ ጋር አብረው ሄዱ።\n ²⁴ በነገውም ወደ ቂሣርያ ገቡ፤ ቆርኔሌዎስም ዘመዶቹንና የቅርብ ወዳጆቹን በአንድነት ጠርቶ ይጠባበቃቸው ነበር። \n ²⁵ ጴጥሮስም በገባ ጊዜ ቆርኔሌዎስ ተገናኝቶ ከእግሩ በታች ወደቀና ሰገደለት።²⁶ ጴጥሮስ ግን፦ ተነሣ፤ እኔ ራሴ ደግሞ ሰው ነኝ ብሎ አስነሣው። \n ²⁷ ከእርሱም ጋር እየተነጋገረ ገባ፥ ብዙዎችም ተከማችተው አግኝቶ፦ \n ²⁸ አይሁዳዊ ሰው ከሌላ ወገን ጋር ይተባበር ወይም ይቃረብ ዘንድ እንዳልተፈቀደ እናንተ ታውቃላችሁ፤ ለእኔ ግን እግዚአብሔር ማንንም ሰው ርኵስና የሚያስጸይፍ ነው እንዳልል አሳየኝ፤\n ²⁹ ስለዚህም ደግሞ ብትጠሩኝ ሳልከራከር መጣሁ። አሁንም በምን ምክንያት አስመጣችሁኝ ? ብዬ እጠይቃችኋለሁ አላቸው።" },
                    { title: " #ምስባክ👇", main: "ብጹዕ ብእሲ ዘእንተ ገሠጽኮ #እግዚኦ። ወዘመርሀኮ ሕገከ። ከመ ይትገኅሥ እመዋዕለ እኩያት።" },
                    { title: "ትርጉም", main: "  “ለኃጢአተኛ ጕድጓድ እስኪቈፈር ድረስ ከክፉዎች ዘመናት ይወገድ ዘንድ፥ አቤቱ፥ አንተ የገሠጽኸው ሕግህንም ያስተማርኸው ሰው ምስጉን ነው።” \n መዝ.93÷12 - 13" },
                    { title: "📖 ወንጌል ማቴዎስ 16 ", main: "¹³ ኢየሱስም ወደ ፊልጶስ ቂሣርያ አገር በደረሰ ጊዜ ደቀ መዛሙርቱን፦ ሰዎች የሰውን ልጅ ማን እንደ ሆነ ይሉታል? ብሎ ጠየቀ። \n¹⁴ እነርሱም፦ አንዳንዱ መጥምቁ ዮሐንስ፥ ሌሎችም ኤልያስ፥ ሌሎችም ኤርምያስ ወይም ከነቢያት አንዱ ነው ይላሉ አሉት። \n¹⁵ እርሱም፦ እናንተስ እኔን ማን እንደ ሆንሁ ትላላችሁ ? አላቸው። \n¹⁶ ስምዖን ጴጥሮስም መልሶ፦ አንተ ክርስቶስ የሕያው እግዚአብሔር ልጅ ነህ አለ። \n¹⁷ ኢየሱስም መልሶ እንዲህ አለው፦ የዮና ልጅ ስምዖን ሆይ፥ በሰማያት ያለው አባቴ እንጂ ሥጋና ደም ይህን አልገለጠልህምና ብፁዕ ነህ። \n¹⁸ እኔም እልሃለሁ፥ አንተ ጴጥሮስ ነህ፥ በዚችም ዓለት ላይ ቤተ ክርስቲያኔን እሠራለሁ፥ የገሃነም ደጆችም አይችሉአትም። \n¹⁹ የመንግሥተ ሰማያትንም መክፈቻዎች እሰጥሃለሁ፤ በምድር የምታስረው ሁሉ በሰማያት የታሰረ ይሆናል፥ በምድርም የምትፈታው ሁሉ በሰማያት የተፈታ ይሆናል። \n²⁰ ያን ጊዜም እርሱ ክርስቶስ እንደ ሆነ ለማንም እንዳይነግሩ ደቀ መዛሙርቱን አዘዛቸው። \n²¹ ከዚያን ቀን ጀምሮ ኢየሱስ ወደ ኢየሩሳሌም ይሄድ ዘንድ ከሽማግሎችና ከካህናት አለቆች ከጻፎችም ብዙ መከራ ይቀበልና ይገደል ዘንድ በሦስተኛውም ቀን ይነሣ ዘንድ እንዲገባው ለደቀ መዛሙርቱ ይገልጥላቸው ጀመር። \n²² ጴጥሮስም ወደ እርሱ ወስዶ፦ አይሁንብህ ጌታ ሆይ፤ ይህ ከቶ አይደርስብህም ብሎ ሊገሥጸው ጀመረ። \n²³ እርሱ ግን ዘወር ብሎ ጴጥሮስን፦ ወደ ኋላዬ ሂድ፥ አንተ ሰይጣን፤ የሰውን እንጂ የእግዚአብሔርን አታስብምና ዕንቅፋት ሆነህብኛል አለው። \n " },
                    { title: "✝️ ቅዳሴ", main: " #እመቤታችን_የማርያም_ቅዳሴ ነው። የ #እናታችን_የእመቤታችን_የቅድስት_ድንግል_ማርያም_ወላዲተ_አምላክ ፍቅሯ በልባችን ጣዕሟ ባንደበታችን ይደርብን!!! " }
                ]
            }
        ]
    },
    "Pagume": {
        days: [
            {
                id: 1,
                title: "Commemoration of St. Michael",
                content: [
                    { title: "Feast Day: ", main: "We celebrate the feast of Archangel Michael." },
                    { title: "Protection: ", main: "St. Michael is considered the protector of the faithful." }
                ]
            },
            {
                id: 2,
                title: "The Holy Cross",
                content: [
                    { title: "Discovery: ", main: "We commemorate the discovery of the True Cross by Queen Helena." },
                    { title: "Celebration: ", main: "This day is marked with the Meskel bonfire ceremony." }
                ]
            },
            // ... other days
        ],
    }
    // ... other months
};

const months = [
    "Meskerem", "Tikimt", "Hidar", "Tahsas",
    "Tir", "Yekatit", "Megabit", "Miazia",
    "Ginbot", "Sene", "Hamle", "Nehasse", "Pagume"
];

const Gitsawe = () => {
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [selectedDay, setSelectedDay] = useState(null);
    const [monthData, setMonthData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [dayData, setDayData] = useState(null);
    const [abortController, setAbortController] = useState(null);

    // Fetch month data when selectedMonth changes
    useEffect(() => {
        if (!selectedMonth) return;

        const controller = new AbortController();
        setAbortController(controller);

        const fetchMonthData = async () => {
            setLoading(true);
            setError(null);
            setDayData(null);
            setSelectedDay(null);
            setMonthData([]);

            try {
                // Simulate API call with mock data
                await new Promise(resolve => setTimeout(resolve, 300));

                if (controller.signal.aborted) {
                    throw new DOMException('Aborted', 'AbortError');
                }

                const data = mockGitsaweData[selectedMonth];
                if (!data) {
                    throw new Error(`Data not available for ${selectedMonth}`);
                }

                if (data && Array.isArray(data.days)) {
                    setMonthData(data.days);
                } else {
                    throw new Error('Invalid data format: "days" array not found');
                }
            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError(err.message);
                    setMonthData([]);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchMonthData();

        return () => {
            if (controller) {
                controller.abort();
            }
        };
    }, [selectedMonth]);

    // Update dayData when selectedDay or monthData changes
    useEffect(() => {
        if (selectedDay !== null && Array.isArray(monthData)) {
            const foundDay = monthData.find(item => item.id === selectedDay);
            setDayData(foundDay || null);
        } else {
            setDayData(null);
        }
    }, [selectedDay, monthData]);

    const handleMonthClick = (month) => {
        if (abortController) {
            abortController.abort();
        }
        setSelectedMonth(month);
    };

    // Get days in month (Pagume is 5 days, rest 30)
    const getDaysForMonth = (month) => {
        if (month === "Pagume") return Array.from({ length: 5 }, (_, i) => i + 1);
        return Array.from({ length: 30 }, (_, i) => i + 1);
    };

    // Navigation handlers
    const handlePrev = () => {
        if (selectedDay === null || selectedMonth === null) return;

        const currentMonthIndex = months.indexOf(selectedMonth);

        if (selectedDay === 1) {
            // Navigate to previous month
            const newMonthIndex = currentMonthIndex === 0 ? months.length - 1 : currentMonthIndex - 1;
            const newMonth = months[newMonthIndex];
            setSelectedMonth(newMonth);
            setSelectedDay(getDaysForMonth(newMonth).length);
        } else {
            // Previous day in same month
            setSelectedDay(selectedDay - 1);
        }
    };

    const handleNext = () => {
        if (selectedDay === null || selectedMonth === null) return;

        const currentMonthIndex = months.indexOf(selectedMonth);
        const daysInMonth = getDaysForMonth(selectedMonth);

        if (selectedDay === daysInMonth.length) {
            // Navigate to next month
            const newMonthIndex = (currentMonthIndex + 1) % months.length;
            const newMonth = months[newMonthIndex];
            setSelectedMonth(newMonth);
            setSelectedDay(1);
        } else {
            // Next day in same month
            setSelectedDay(selectedDay + 1);
        }
    };

    const handleFirstDay = () => {
        if (selectedMonth === null) return;
        setSelectedDay(1);
    };

    const handleLastDay = () => {
        if (selectedMonth === null) return;
        const daysInMonth = getDaysForMonth(selectedMonth);
        setSelectedDay(daysInMonth.length);
    };

    return (
        <div className='gitsawe-container'>
            <h2>Welcome to Gitsawe Page</h2>
            <p>Select a month and day to view its details.</p>

            {/* Month Buttons */}
            <div className="month-container">
                {months.map((month) => (
                    <button
                        key={month}
                        className={`month-btn ${selectedMonth === month ? 'active' : ''}`}
                        onClick={() => handleMonthClick(month)}
                        disabled={loading}
                    >
                        {month}
                    </button>
                ))}
            </div>

            {/* Loading and Error */}
            {loading && <div className="loading">Loading {selectedMonth} data...</div>}
            {error && <div className="error">Error: {error}</div>}

            {/* Days Buttons */}
            {selectedMonth && monthData.length > 0 && !loading && (
                <div className="days-container">
                    {getDaysForMonth(selectedMonth).map((day) => (
                        <button
                            key={day}
                            className={`day-btn ${selectedDay === day ? 'active' : ''}`}
                            onClick={() => setSelectedDay(day)}
                        >
                            {day}
                        </button>
                    ))}
                </div>
            )}

            {/* Display Selected Day Content with Navigation */}
            {dayData && (
                <div className="content-display">
                    <div className="navigation-controls">
                        <div className="nav-btn-group">
                            <button
                                onClick={handleFirstDay}
                                disabled={loading}
                                className="nav-btn first-last-btn"
                            >
                                First Day
                            </button>
                            <button
                                onClick={handlePrev}
                                disabled={loading}
                                className="nav-btn"
                            >
                                &larr; Previous
                            </button>
                        </div>

                        <div className="date-info">
                            <h3>{dayData.title}</h3>
                            <p>{selectedMonth} - Day {selectedDay}</p>
                        </div>

                        <div className="nav-btn-group">
                            <button
                                onClick={handleNext}
                                disabled={loading}
                                className="nav-btn"
                            >
                                Next &rarr;
                            </button>
                            <button
                                onClick={handleLastDay}
                                disabled={loading}
                                className="nav-btn first-last-btn"
                            >
                                Last Day
                            </button>
                        </div>
                    </div>
                    {/* 
          <div className="content">
            {Array.isArray(dayData.content) ? (
              dayData.content.map((section, idx) => (
                <div key={idx} className="content-section">
                  <strong>{section.title}</strong>
                  <p>
                    {section.main.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>

                </div>
              ))
            ) : (
              <p>{dayData.content}</p>
            )}
          </div> */}
                    <div className="content">
                        {Array.isArray(dayData.content) ? (
                            dayData.content.map((section, idx) => (
                                <div key={idx} className="content-section">
                                    <strong>{section.title}</strong>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: section.main.replace(/\n/g, "<br />")
                                        }}
                                    />
                                </div>
                            ))
                        ) : (
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: dayData.content.replace(/\n/g, "<br />")
                                }}
                            />
                        )}
                    </div>

                </div>
            )}
        </div>
    );
};

export default Gitsawe;
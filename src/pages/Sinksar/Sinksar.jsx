import './Sinksar.css';
import React, { useState, useEffect } from 'react';

// Mock data with the new content structure
const mockSinksarData = {
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
      {
        id: 3,
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
      // ... other days
    ],
  },
  "Nehasse": {
    days: [
      {
        id: 7,
        title: "ስንክሳር ዘወርኅ ነሐሴ ፯",
        content: [
          { title: "ጽንሰታ ለእግዝእትነ ማርያም ድንግል ወላዲተ አምላክ", main: "<b>አንድ አምላክ በሚሆን በአብ በወልድ በመንፈሰ ቅዱስ ስም ነሐሴ ሰባት ከጥንት ጀምሮ በአዳም ባሕርይ ውስጥ እንደ ነጭ ዕንቁ የምታበራ የብርሃን እናቱ እግዝእትነ ማርያም በቅዱስ ገብርኤል ብሥራት ተፀነሰች፡፡ </b> \n \n ጴጥርቃ እና ቴክታ የሚባሉ ደጋግ ሰዎች በኢየሩሳሌም በአንድነት ተጋብተው ይኖሩ ነበር፤ እነዚህም በእግዚአብሔር የሚያምኑ የተወደዱ ጻድቃን ሰዎች ነበሩ፡፡ እነዚህም ሰዎች በእግዚአብሄርም በሰውም ዘንድ የተመሰከረለላቸው ባለጸጎች ነበሩ፤ ነገር ግን መካን ስለነበሩ የሚወርሳቸው ልጅ አልነበራቸውም፡፡ አንድ ቀን ጴጥርቃ ቴክታን እንዲህ አላት ‹‹እኅቴ ሆይ ይህን ሁሉ የሰበሰብነውን ገንዘባችንን ምን እናደርገዋለን ? ልጅ የለን የሚወርሰን አንቺም መካን ነሽ፣ እኔም ካንቺ በቀር ሌላ ሴት አላውቅም›› አላት፡፡ እርሷም ‹‹ወንድሜ ሆይ አምላከ እስራኤል ለእኔ ልጅ ቢነሳኝ አንተም እንደኔው ሆነህ ትቀራለህን፤ ከሌላ ደርሰህ ውለድ እንጂ›› ብላ ብታሰናብተው ‹‹እንደዚህ ያለ ነገር እንኳንስ ላደርገው በልቦናዬም እንዳላስበው አምላከ እስራኤል ያውቃል›› አላት፡፡ እርሷም ‹‹አምላከ እስራኤል የሚያደርገውን የሚያውቅ የለም፣ ትላንትና ማታ በህልሜ ነጭ ጥጃ ከማኅፀኔ ስትወጣ ያችም ነጭ ጥጃ ሌላ ነጭ ጥጃ ስትወልድ እንዲሁ እስከ 7ት ትውልድ ሲዋለድ ሰባተኛይቱ ጨረቃን ስትወልድ፣ ጨረቃዋም ፀሐይን ስትወልድ አየሁ›› አለችው። እርሱም በጠዋት ከህልም ፈቺ ዘንድ ሄዶ የነገረችውን ሁሉ ነገረው፤ ያም ህልም ፈቺ ‹‹እግዚአብሔር በምሕረቱ አይቷችኋል በሳህሉ መግቧአችኋል፣ 7 አንስት ጥጆች መውለዳችሁ 7 ሴቶች ልጆችና የልጅ ልጆች ትወልዳላችሁ፣ ከቤታችሁ ሰባተኛይቱ ጨረቃ መውለዷ ከሰው የበለጠች ከመላእክትም የከበረች ደግ ፍጥረት ትወልዳላችሁ፤ የፀሐይ ነገር ግን አልታወቀኝም›› አለው፡፡ እርሱም የነገረውን ሁሉ ሄዶ ለሚስቱ ነገራት፤ እርሷም ‹‹እንጃ አምላከ እስራኤል የሚያደርገውን ማን ያውቃል!›› ብላ ዝም አለች፡፡ ከዚያም ፀንሳ ሴት ልጅ ወለደች ስሟንም ሔሜን ብለው አወጡላት፤ ሔሜንም አድጋ ለአካለ መጠን ስትደርስ ባል አጋብተዋት ሴት ልጅ ወለደች፣ በስምንተኛ ቀኗም ዴርዲ ብለው ስም አወጡላት፡፡ ዴርዲም አድጋ እንዲሁ ሴት ወለደችና ቶና አለቻት፣ ቶናም እንዲሁ ሴት ልጅ ወልዳ ሲካር አለቻት፣ ሲካርም እንዲሁ ሴት ልጅ ወልዳ ሴትና አለቻት፣ ሴትናም እንዲሁ ሴት ልጅ ወልዳ ሔርሜላ አለቻት፣ ሔርሜላም እንዲሁ ሴት ልጅ ወልዳ ንጽህት ቅድስት ክብርት የምትሆን እመቤታችንን የወለደቻትን ቅድስት ሐናን ወለደች፡፡ ይኽችም ቅድስት ሐና በሥርዓት አድጋ ለአእምሮ ስትበቃና አካለ መጠን ስትደርስ ከቤተ መንግስት ወገን ከነቅዱስ ዳዊት ወገን ከሆነው ከቅዱስ ኢያቄም ጋር አጋቧት፤ እነዚህ ቅዱሳን ኢያቄምና ሐና በአንድነት ተጋብተው ሲኖሩ ልጅ አጡ፡፡ እነርሱም እጅግ ደጋግ ሰዎች ነበሩ፡፡ አንድ ልጅ እንኳ ስላልነበራቸው እጅግ ያዝኑ ነበር፤ ወደ ቤተ መቅደስ እየሄዱ እግዚአብሔር ልጅ ይሰጣቸው ዘንድ አጥብቀው ይለምኑት ነበር፤ መብዓ ይዘው ለሊቀ ካህኑ ሲሰጡት ሊቀ ካህኑም እንኳ ሳይቀር ‹‹እግዚአብሔር ብዙ ተባዙ ያለውን ሕግ በእናንተ ላይ እንዳይፈጸም አድርጎ ልጅ የከለከላችሁ ኃጢአተኛ ብትሆኑ ነውና መብዓችሁን አልቀበልም›› ብሎ በእጅጉ አሳዝኗቸዋል። በሊቀ ካህኑ እያዘኑና እየተከዙ ሲመለሱ ከድካማቸው ያርፉ ዘንድ ዛፍ ሥር ተቀመጠው ሳለ እርግቦች ጫጩቶቻቸውን ሲያጫውቱ ተመልክተው ‹‹ለእነዚህ ወፎች እንኳ ልጆችን የሰጠህ አምላክ ለእኛስ መች ይሆን ልጅ የምትሰጠን›› ብለው እጅግ አምርረው አለቀሱ፡፡ ቅዱስ ኢያቄምና ቅድስት ሐና ሲያዝኑ ሲጸልዩ ውለው ከዘካርያስ ከሊቀ ካህናቱ ሄደው ‹‹አቤቱ ጌታችን ሆይ ወንድ ልጅ ብንወልድ ተምሮ ቤተ እግዚአብሔርን አገልግሎ እንዲኖር እንሰጣለን፤ ሴት ልጅም ብንወልድ ውኃ ቀድታ መሶብ ወርቅ ሰፍታ መጋረጃ ፈትላ ካህናትን አገልግላ እንድትኖር እንሰጣለን›› ብለው ስዕለት ገቡ፡፡ ዘካርያስም ‹‹እግዚአብሔር ጸሎታችሁን ይስማችሁ ስዕለታችሁን ይቀበልላችሁ የልቦናችሁን ሀሳብ ይፈጽምላችሁ›› ብሎ አሳረገላቸው፡፡ ከዚህም በኋላ ቅድስት ሐናና ቅዱስ ኢያቄም ዕለቱን ራእይ አይተው ነገር አግኝተው አደሩ፤ ራእዩስ እንዴት ነው ቢሉ ኢያቄም ‹‹ሰባቱ ሰማያት እንደ መጋረጃ ተገልጠው ከላይኛው ሰማይ ነጭ ወፍ ወርዶ በራሴ ላይ ሲቀመጥ አየሁ›› አላት፡፡ ‹‹ወፍ›› የተባለው ጌታችን መድኃኒታችን ኢየሱስ ክርስቶስ ነው፤ ነጭነቱ ንጽሐ ባህሪው ነው፤ ‹‹ከላይኛው ሰማይ ነጭ ወፍ ወርዶ በራሴ ላይ ሲቀመጥ አየሁ›› ማለቱ የኢያቄምን(የሰውን) ባህርይ ባህርይ እንዳደረገው ዕወቅ ሲል ነው፡፡ ሰባቱ ሰማያት የተባሉ የጌታችን ልዩ ልዩ ባሕርይው ምልአቱ ስፍሃቱ ርቀቱ ልእልናው ናቸው፤ ቅድስት ሐናም ‹‹እኔም ደግሞ አየሁ እንጂ›› አለችው፤ ‹‹ምን አየሽ›› ቢላት ‹‹ነጭ ርግብ መጥታ በራሴ ላይ ወርዳ በጆሮዬ ገብታ በማኅፀኔ ስትተኛ አየሁ›› አለችው፡፡ ‹‹ርግብ›› የተባለች እመቤታችን ድንግል ማርያም ናት፣ ነጭነቱ ንጽህናዋ ቅድስናዋ ድንግልናዋ ነው፤ ‹‹ነጭ ርግብ መጥታ በራሴ ላይ ተቀምጣ ከራሴ ወርዳ በጆሮዬ ገብታ በማኅፀኔ ስትተኛ አየሁ›› ማለቷ ብሥራተ ገብርኤልን በጆሮዋ ሰምታ እመቤታችን ቅድስት ድንግል ማርያም ጌታችንን መፀነሷን ነው፡፡ ይህንኑም ራእይ ያዩት ሐምሌ 30 ዕለት ነው፤ እነርሱም እንዲህ ያለ ራእይ ካየን ነገር ካገኘን ብለው ዕለቱን በሩካቤ ሥጋ አልተገናኙም ይልቁንም ፈቃደ እግዚአብሔር ቢሆን ብለው አዳምንና ሔዋንን ‹‹‹ብዙ ተባዙ ምድርንም ምሉአት› ብሎ ያበሰረ አምላክ ለእኛስ ይልክልን የለምን›› ብለው ዕለቱን አልጋ ምንጣፍ ለይተው እስከ ሰባት ቀን ድረስ ለየብቻቸው ሰነበቱ፡፡ ነሐሴ በባተ በሰባተኛው ቀን ‹‹ከሰው የበለጠች ከመላእክት የከበረች ደግ ፍጥረት ትወልዳላችሁና ዛሬ በሩካቤ ሥጋ ተገናኙ ብሎሏችኋል ጌታ›› ብሎ መልአኩ ለሐና ነገራት፤ በፈቃደ እግዚአብሔር በብሥራተ መልአክ እመቤታችን እግዝእትነ ማርያም ተፀነሰች፡፡ እግዚአብሔር አምላክ አብርሃምንና ሳራን የተመለከተ አምላክ በኢያቄምና ሃና አማካኝነት ለዓለም ድኅነት ምክንያት የሆነችውንና ዓለም ሳይፈጠር በአምላክ ልቦና ታስባ ትኖር የነበረች የተነገረላት ትንቢት ሊፈጸም የአባት የእናቷ የቅድመ አያቶቿ ራእይ ሊተረጎም ጌታ የፈቀደበት ጊዜ ሲደርስ እመቤታችን እግዝእትነ ማርያም እሁድ እለት ነሐሴ 7 ቀን በ16 ዓ.ዓ ተፀነሰች፡፡ እመቤታችን ከተፀነሰች በኋላ አይሁድ ቀንተው ተነሱባቸው፤ ቅናቱ እንዴት ነው ቢሉ ሳሚናስ የሚባል የጦሊቅ ልጅ ከኤዶቅ ከአጎቱ ቤት ሄዶ ሞተ፤ እነርሱም እንቀብራለን ብለው ባልጋ ይዘው ሲሄዱ ከመንገድ አሳረፉት፡፡ ቅድስት ሐናም የአጎቷ ልጅ ነበርና ለማልቀስ ብትደርስ ዘመዶቿ ሁሉ ተሰብስበው ሲላቀሱ ቆዩአት፤ እርሷም አብራ እየዞረች ስታለቅስ ጥላዋ ቢያርፍበት መግነዝ ፍቱልኝ ሳይል ብድግ ብሎ ተነሥቶ ‹‹ስብሃት ለኪ ማርያም እሙ ለፀሐየ ጽድቅ ለአብ ሙሽራው ለወልድ ወላዲቱ ለመንፈስ ቅዱስ ጽርሃ ቤቱ ተፈስሂ ደስ ይበልሽ ብሎ ሰገደላት፡፡ አይሁድም ይህ ተአምር ሲደረግ ከዚያው ነበሩና ‹‹ምነው ሳሚናስ ምን አየህ ምን ትላለህ›› ቢሉት እርሱም ‹‹ከዚህች ከሐና ማኅፀን የምትወለደው ሕፃን ‹ሰማይን ምድርን አየርን የፈጠረ አምላክን ትወልዳለች› እያሉ መላእክት ሁሉ ሲያመሰግኗት ሰማሁ›› አላቸው፡፡ ዳግመኛም ‹‹እኔንም ያነሣችኝ የፈወሰችኝ ያዳነችኝ እርሷ ናት›› አላቸው፤ አይሁድም ‹‹በል ተወው ሰማንህ›› ብለው ቅናት ጀመሩ፤ ቅድስት ሐና በእርጅናዋ ጊዜ መፀነሷን የተመለከቱ ዘመዶቿና ያገሯ ሰዎች ተገርመው እየመጡ ይጠይቋት ነበር፡፡ እመቤታችን ማርያም በፅንስ እያለች ብዙ ታምራትን አድርጋለች፤ ከእነዚህም መካከል ዐይነ ስውር የነበረችው የአርሳባን ልጅ ወደ ሐና መጥታ እውነትም ሐና መፀነሷን ለማረጋገጥ ሆዷን ዳሰሰቻት፤ እርሷም ሳታስበው ዐይኗን ስትነካ ዐይኗ በራላት፡፡ እመቤታችንም በተፀነሰች በ9 ወር ከአምስት ቀን የግንቦት መባቻ ዕለት ግንቦት 1 ተወለደች፤ ክብርት እናቱን እናት አድርጎ ለሰጠን ለመድኀኔዓለም ክርስቶስ ክብርና ምስጋና ይግባው፤ በቃልኪዳኗ በምልጃዋ ይማረን፤ በጸሎቷም ይጠብቀን።" },
          { title: "ሊቀ ሐዋርያት ቅዱስ ጴጥሮስ", main: " የመንግሥተ ሰማያትን ምክፈቻ ቁልፍ የተቀበለበት ዕለት ነው። " },
          { title: "ጻድቅ አፄ ናዖድ", main: " አገራችን ኢትዮጵያ ምስፍና ከክህነት ንግሥናን ከጽድቅ ያጣመሩ ብዙ መሪዎች ነበሯት፤ ከእነዚህ አንዱ ደግሞ አፄ ናዖድ ናቸው:: ጻድቁ ንጉሥ የነገሡት ከ1487 እስከ 1499 ዓ.ም ሲሆን ለእመቤታችን በነበራቸው ልዩ ፍቅር ይታወቃሉ፤ ካህን እንደ ነበሩም ይነገራል:: ዛሬ ሁላችን የምንወዳትን ጸሎት (ሰላም ለኪ እንዘ ንሰግድ ንብለኪ . . .) የደረሷት እርሳቸው ናቸው፤ ትልቁን መልክአ ማርያምም ደርሰዋል:: ይህ መልክእ ጣዕሙ ልዩ ነው፤ የጻድቁ ንጉሥ ሚስት (ማርያም ክብራ) ልጆቻቸው (አፄ ልብነ ድንግልና ቡርክት ሮማነ ወርቅ) እጅግ መልካም ክርስቲያኖች ነበሩ:: ንጉሡ አፄ ናዖድ ከባለሟልነት የተነሳ ድንግል ማርያምን እመቤቴ ስምንተኛው ሺ መቼ ይገባል፤ ጊዜውስ እንዴት ያለ ነው አሏት:: እመ ብርሃንም በአካል ተገልጻ የዘመኑንና የሰውን ክፋት ነገረቻቸው፤ ንጉሡም አዝነው እመቤቴ! ከዛ ዘመን አታድርሺኝ አሏት:: በዚህ ምክንያት የስምንተኛው ሺህ ዘመን መስከረም 1 በ1500 ዓ/ም ሊገባ እርሳቸው ነሐሴ 7 ቀን በ1499 ዓ/ም ዐርፈዋል:: " },
          { title: " ቅዱስ ጴጥሮስ (ሊቀ ሐዋርያት)", main: " ዳግመኛ ይህች ዕለት የቅዱስ ጴጥሮስ መታሰቢያ ናት፤ ጌታችን ኢየሱስ ክርስቶስ በመዋዕለ ስብከቱ በዚህች ቀን ደቀ መዛሙርቱን ወደ ቂሣርያ ፊልጶስ ይዟቸው ሄደ:: በዚያም ጌታ ከእነሱ ራቅ ብሎ ተቀምጦ ነበርና የማይሰማቸው መስሏቸው እርስ በእርስ ይከራከሩ ገቡ፤ የክርክራቸው መነሻ ደግሞ ጌታችን ነበር:: የዋሃን (ገና ምሥጢርን ያልተረዱ) ነበሩና አንዱ ተነስቶ ኤልያስ ነው ሌላኛው ሙሴ ሦስተኛው ኤርምያስ ነው በሚል ተከራከሩ:: ቅዱስ ጴጥሮስ ለብቻው ቆሞ ነበርና ጠርተው ሃሳባችንን አስታርቅልን፤ ለአንተስ ማን ይመስልሃል አሉት፤ አረጋዊው ሐዋርያም ተቆጣቸው:: እናንተ እንደምታስቡት እርሱ ከነቢያት አንዱ ሳይሆን እግዚአ ነቢያት- የነቢያት ፈጣሪ ነው አላቸው፤ ወዲያውም ጌታ ጠርቷቸው ወደ እርሱ ቀረቡ:: ቸር አምላክ ለምን ተጠራጠራችሁኝ ብሎ መገሰጽ ሲችል እንዳይደነግጡ ጥያቄውን በፈሊጥ አደረገ፤ የሰውን ልጅ ሰዎች ማን ይሉታል አላቸው፤ እነርሱም በልባቸው ያለውን የሌላ አስመስለው ተናገሩ፤ ጌታችን እናንተስ ማን ትሉኛላችሁ ቢላቸው ጸጥ አሉ፤ ገና ሃይማኖታቸው አልጸናም ነበርና:: በዚያን ጊዜ ቅዱስ ጴጥሮስ ተነስቶ አንተ ውእቱ ክርስቶስ ወልደ እግዚአብሔር ሕያው-አንተ የሕያው እግዚአብሔር የባሕርይ ልጁ ክርስቶስ ነህ አለው:: 📖ማቴ 16፥16 ይህች ቃል የክርስትና ሃይማኖት መሠረት ናትና ጌታችን አንተ ዓለት (መሠረት) ነህ ብሎ የቤተ ክርስቲያንን በዚህ እምነት ላይ መመስረት ተናገረ:: ለቅዱስ ጴጥሮስም መራሑተ መንግስት-የመንግስተ ሰማያት መክፈቻ ቁልፍ (ሥልጣን) ተሰጠው:: ሊቀ ሐዋርያትነትንም ደረበ፤ ዛሬ ለበርካቶቹ የጸነነባቸው ይሔው እምነት ነው፤ ኢየሱስ ክርስቶስን አምላክ ወልደ አምላክ፣ ወልደ ማርያም፣ አካላዊ ቃል፣ፐሥግው ቃልና ገባሬ ኩሉ የሁሉ ፈጣሪ ብለው ካላመኑ እንኳን ጽድቅ ክርስትናም የለም:: ከሊቀ ሐዋርያው ቅዱስ ጴጥሮስ ረድኤት በረከት ያድለን፤ በጸሎቱ ይማረን::" },
          { title: "📌 ነሐሴ 7 ቀን የሚከበሩ ዓመታዊ የቅዱሳን በዓላት", main: " 1. በዓለ ጽንሰታ ለእግዝእትነ ማርያም \n 2. ቅዱሳን ኢያቄም ወሐና \n 3. ቅዱስ ገብርኤል መበሥር \n 4. ቅዱስ ጴጥሮስ ሊቀ ሐዋርያት \n 5. አፄ ናዖድ ጻድቅ (ንጉሠ ኢትዮጵያ) \n 6. ቅዱስ ዮሴፍ ጻድቅ (ወልደ ያዕቆብ-ልደቱ) \n 7. አባ ጢሞቴዎስ ሊቀ ጳጳሳት" },
          { title: "📌 ወርኀዊ በዓላት", main: " 1. ሥሉስ ቅዱስ (አብ ወወልድ ወመንፈስ ቅዱስ) \n 2. አባ ጊዮርጊስ ዘጋስጫ \n 3. አባ ሲኖዳ (የባሕታውያን አለቃ) \n 4. አባ ዳንኤል ዘገዳመ ሲሐት \n 5. አባ ባውላ ገዳማዊ 6. ቅዱስ አትናቴዎስ ሐዋርያዊ \n 7. ቅዱስ አግናጥዮስ (ለአንበሳ የተሰጠ)" },
          { title: "📖መዝ 86 ፥1-6", main: "✍️ መሠረቶቿ በተቀደሱ ተራሮች ናቸው፤ ከያዕቆብ ድንኩዋኖች ይልቅ እግዚአብሔር የጽዮንን ደጆች ይወዳቸዋል፤ የእግዚአብሔር ከተማ ሆይ! በአንቺ የተደረገው ድንቅ ነው . . .ሰው እናታችን ጽዮን ይላል" },
        ]
      }
    ]
  },
  "Pagume": {
    days: [
      {
       id: 1,
        title: "ግንቦት_1_ቀን_የዕለቱ_ግጻዌ",
        content: [
          {
            title: "ግንቦት_1_ቀን_በቅዳሴ_ሰዓት_የተነበቡት_መልእክታ",
            main: "ገላትያ 4:1-13 \n1ኛ ጴጥሮስ 1:8-13 \nሐዋርያት 7:44-51\nሐዋርያት 1:12-15"
          },
          {
            title: "ግንቦት_1_ቀን_በቅዳሴ_ሰዓት_የሚነበበው_የሚዜመው_የቅዳሴ_ምስባክ",
            main: "\"መሠረታቲሃ ውስተ አድባር ቅዱሳን። ያበድሮን #እግዚአብሔር ለአናቅጸ ጽዮን። እምኵሉ ተዐይኒሁ ለያዕቆብ\"። መዝ 86፥1-2。\n#ትርጉም፦ \"መሠረቶቹ በተቀደሱ ተራሮች ናቸው፤ ከያዕቆብ ድንኳኖች ይልቅ፥ #እግዚአብሔር የጽዮንን ደጆች ይወድዳቸዋል\"። መዝ 86፥1-2。"
          },
          {
            title: "ግንቦት_1_ቀን_በቅዳሴ_ሰዓት_የሚነበበውን_የእለቱን_ወንጌል_እናንብብ",
            main: "ሉቃስ 1:39-57"
          }
        ]
      },
      {
        id: 2,
        title: "ግንቦት_2_ቀን_የዕለቱ_ግጻዌ",
        content: [
          {
            title: "ግንቦት_2_ቀን_በቅዳሴ_ሰዓት_የተነበቡት_መልእክታ",
            main: "1ኛ ቆሮንቶስ 4:8-14\nያዕቆብ 5:10-12\nሐዋርያት 14:21-28"
          },
          {
            title: "ግንቦት_2_ቀን_በቅዳሴ_ሰዓት_የሚነበበው_የሚዜመው_የቅዳሴ_ምስባክ",
            main: "\"ጻድቅሰ ከመ በቀልት ይፈሪ። ወይበዝኅ ከመ ዘግባ ዘሊባኖስ። ትኩላን እሙንቱ ውስተ ቤተ #እግዚአብሔር\"። መዝ 91፥12-13。\n#ትርጉም፦ \"ጻድቅ እንደ ዘንባባ ያፈራል፥ እንደ ሊባኖስ ዝግባም ያድጋል። በ #እግዚአብሔር ቤት ውስጥ ተተክለዋል፥ በአምላካችንም አደባባይ ውስጥ ይበቅላሉ\"። መዝ 91፥12-13。"
          },
          {
            title: "ግንቦት_2_ቀን_በቅዳሴ_ሰዓት_የሚነበበውን_የእለቱን_ወንጌል_እናንብብ",
            main: "ማቴዎስ 7:21-29"
          }
        ]
      },
      {
        id: 3,
        title: "ግንቦት_3_ቀን_የዕለቱ_ግጻዌ",
        content: [
          {
            title: "ግንቦት_3_ቀን_በቅዳሴ_ሰዓት_የተነበቡት_መልእክታ",
            main: "ቆላስይስ 3:1-25\n1ኛ ጴጥሮስ 3:15-22\nሐዋርያት 11:1-19"
          },
          {
            title: "ግንቦት_3_ቀን_በቅዳሴ_ሰዓት_የሚነበበው_የሚዜመው_የቅዳሴ_ምስባክ",
            main: "\"አንሰ ሰከብኩ ወኖምኩ። ወተንሣእኩ እስመ #እግዚአብሔር አንሥአኒ። አይፈርህ እምአእላፍ አሕዛብ\"። መዝ.3÷5-6\n#ትርጉም፦ \"እኔ ተኛሁ አንቀላፋሁም፤ #እግዚአብሔርም ደግፎኛልና ነቃሁ። ከሚከብቡኝ ከአእላፍ ሕዝብ አልፈራም\"። መዝ.3÷5-6"
          },
          {
            title: "ግንቦት_3_ቀን_በቅዳሴ_ሰዓት_የሚነበበውን_የእለቱን_ወንጌል_እናንብብ",
            main: "ሉቃስ 24:33-44"
          }
        ]
      }
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

const Sinksar = () => {
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

        const data = mockSinksarData[selectedMonth];
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
    <div className='sinksar-container'>
      <h2>Welcome to Sinksar Page</h2>
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

export default Sinksar;
// Data Models
const quotesDB = {
    en: [
        { text: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.", ref: "Jeremiah 29:11" },
        { text: "Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid.", ref: "John 14:27" },
        { text: "Trust in the Lord with all your heart, and do not lean on your own understanding.", ref: "Proverbs 3:5" },
        { text: "I can do all things through him who strengthens me.", ref: "Philippians 4:13" },
        { text: "The Lord is my shepherd; I shall not want.", ref: "Psalm 23:1" },
        { text: "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law.", ref: "Galatians 5:22-23" },
        { text: "Be strong and courageous. Do not be frightened, and do not be dismayed, for the Lord your God is with you wherever you go.", ref: "Joshua 1:9" },
        { text: "And we know that for those who love God all things work together for good, for those who are called according to his purpose.", ref: "Romans 8:28" },
        { text: "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law.", ref: "Galatians 5:22-23" },
        { text: "Be strong and courageous. Do not be frightened, and do not be dismayed, for the Lord your God is with you wherever you go.", ref: "Joshua 1:9" },
        { text: "And we know that for those who love God all things work together for good, for those who are called according to his purpose.", ref: "Romans 8:28" },
        { text: "Their land is very big and it has everything that we need. God will surely give it to you.", ref: "Judges 18:10" },
        { text: "the Spirit of the LORD came mightily upon him.", ref: "Judges 15:14" },
        { text: "you will become pregnant and you will give birth to a son.", ref: "Judges 13:3" },
        { text: "I will make you a great nation and I will bless you and make your name great. You will be a blessing.", ref: "Genesis 12:2" },
        { text: "Samson prayed to the Lord, Remember me, Almighty Lord. Please make me strong again one more time. I want to punish the Philistines because they cut out my two eyes..", ref: "Judges 16:28" },
        { text: "The Lord answered him, Understand that I will be with you!", ref: "Judges 6:16" },
        { text: "The Lord's angel appeared to Gideon. He said to him, The Lord is with you, brave fighter. ", ref: "Judges 6:12" },
        { text: "But if you refuse to serve the Lord, then you should choose another god to worship. Decide today! Will you serve the gods that your ancestors worshipped across the river? Will you serve the gods of the Amorites, in whose land you are now living? You choose! But as for me and my family, we will serve the Lord.’", ref: "Joshua 24:15" },
        { text: "Remember that I have told you this: Be strong and do not be afraid. Do not be weak but be brave. I, the Lord your God, will be with you, everywhere that you go.", ref: "Joshua 1:9" },
        { text: "Now we know that the Lord is with us! You have not refused to obey the Lord. So we know that he will not punish us Israelites.", ref: "Joshua 22:31" },
        { text: "Be strong and do not be afraid. Be very careful to do all the things that Moses commanded you to do. Then everything will go well with you, everywhere that you go.", ref: "Joshua 1:7" },
        { text: "Joshua said to them, Do not be afraid. Be very strong and brave. Look at these kings! This is what the Lord will do to all the enemies that you will fight against.", ref: "Joshua 10:25" },
        { text: "No one can stop you from taking this land as long as you live. As I was with Moses, I will always be with you. I will never leave you alone.", ref: "Joshua 1:5" },
        { text: "You must keep on speaking about the words of God's law. Think about what it says, all the time. Be careful to obey it. Then you will do well, and you will win.", ref: "Joshua 1:8" },
        { text: "I will praise the Lord's name.Everyone must know that our God is very great!", ref: "Deuteronomy 32:3" },
        { text: "God will bless you with lots of grain to make bread. God will bless you in your homes and when you go outside.", ref: "Deuteronomy 28:5-6 " },
        { text: "Please look down from your home in heaven and bless your people, Israel. Please bless the land that you have given to us. You promised our ancestors that you would do that. It is a land where there is plenty of food and drink, enough for everyone.", ref: "Deuteronomy 26:15" },
        { text: "Do not be afraid when you go out to fight a war against your enemies. You may see that their armies have more horses, chariots and soldiers than you have. Do not be afraid of them! Remember that the Lord your God is with you. He rescued you from Egypt.", ref: "Deuteronomy 20:1" },
        { text: "Make sure that there is justice for everyone in the land that the Lord your God is giving to you. Then the land will belong to you and you will enjoy life in it.", ref: "Deuteronomy 16:20" },
        { text: "Keep this food for the Levites, who have no land of their own. It is also for the foreign people, the widows, and the children who have no family. These people in your town can eat as much as they want. If you do that, the Lord your God will bless you in all your work.", ref: "Deuteronomy 14:29" },
        { text: "Remember that you are a special people who belong to the Lord your God. He has chosen you for himself out of all the other people who live on the earth. He loves you as his special people.", ref: "Deuteronomy 7:6" },
        { text: "No other nation has a god who is near to them like the Lord our God. Even great nations have no god like that. But when we pray to the Lord our God, he listens!", ref: "Deuteronomy 4:7" },
        { text: "I, the Lord your God, have blessed you in everything that you have done. I have taken care of you as you travelled through this great desert. I have been with you for 40 years. You have received everything that you needed.", ref: "Deuteronomy 2:7" },
        { text: "Balak said to Balaam, ‘You should have come the first time that I sent men to get you. Why did you not come? Did you think that I could not pay you with enough good things?", ref: "Numbers 22:37" },

    ],
    ml: [
        { text: "നിങ്ങളെക്കുറിച്ചുള്ള ചിന്തകള് എന്റെ മനസ്സിലുണ്ട്; അവ തിന്മയുടേതല്ല, നന്മയുടേതുതന്നെ ആകുന്നു എന്നു കര്ത്താവ് അരുളിച്ചെയ്യുന്നു.", ref: "ജെറമിയാ 29:11" },
        { text: "സമാധാനം ഞാന്‍ നിങ്ങള്‍ക്കു നല്‌കുന്നു. എന്റെ സമാധാനം നിങ്ങള്‍ക്കു ഞാന്‍ തരുന്നു. ലോകം നല്‌കുന്നതുപോലെയല്ല ഞാന്‍ നല്‌കുന്നത്‌. നിങ്ങളുടെ ഹൃദയം അസ്വസ്‌ഥമാകേണ്ടാ. നിങ്ങള്‍ ഭയപ്പെടുകയും വേണ്ടാ.", ref: "യോഹന്നാന്‍ 14:27" },
        { text: "പൂര്‍ണ്ണഹൃദയത്തോടെ കര്‍ത്താവില്‍ ആശ്രയിക്കുക; സ്വന്തം ബുദ്ധിയെ ആശ്രയിക്കരുത്‌.", ref: "സുഭാഷിതങ്ങള്‍ 3:5" },
        { text: "എന്നെ ശക്തനാക്കുന്നവനിലൂടെ എല്ലാം ചെയ്യാൻ എനിക്കു കഴിയും.", ref: "ഫിലിപ്പിയർ 4:13" },
        { text: "കര്‍ത്താവാണ്‌ എന്റെ ഇടയന്‍; എനിക്കൊന്നിനും കുറവുണ്ടാകുകയില്ല.", ref: "സങ്കീർത്തനങ്ങൾ 23:1" },
        { text: "എന്നാൽ, ആത്മാവിന്റെ ഫലം സ്നേഹം, സന്തോഷം, സമാധാനം, ക്ഷമ, ദയ, നന്മ, വിശ്വസ്തത, സൗമ്യത, ആത്മസംയമനം എന്നിവയാണ്.", ref: "ഗലാത്തിയർ 5:22-23" },
        { text: "ഉറപ്പുള്ളവനും ധൈര്യശാലിയുമായിരിക്കുക; ഭയപ്പെടുകയോ പരിഭ്രമിക്കുകയോ വേണ്ടാ. നീ പോകുന്നിടത്തെല്ലാം നിന്റെ ദൈവമായ കര്‍ത്താവ്‌ നിന്നോടുകൂടെയുണ്ടായിരിക്കും.", ref: "ജോഷ്വ 1:9" },
        { text: "വളരെ വിശാലമായ, ഒന്നിനും ക്ഷാമമില്ലാത്ത ആ പ്രദേശം, ദൈവം നിങ്ങള്‍ക്കു തന്നിരിക്കുന്നു.", ref: "ന്യായാധിപ‌ന്‍‍മാര്‍ 18:10" },
        { text: "കര്‍ത്താവിന്റെ ആത്മാവ് ശക്തിയോടെ അവന്റെ മേല്‍ വന്നു", ref: "ന്യായാധിപ‌ന്‍‍മാര്‍ 15:14" },
        { text: "നീ ഗര്‍ഭം ധരിച്ച് ഒരു പുത്രനെ പ്രസവിക്കും.", ref: "ന്യായാധിപ‌ന്‍‍മാര്‍ 13:3" },
        { text: "ഞാൻ നിന്നെ വലിയൊരു ജനതയാക്കിത്തീർക്കും; ഞാൻ നിന്നെ അനുഗ്രഹിക്കുകയും നിന്റെ പേര് മഹത്തരമാക്കുകയും ചെയ്യും. നീ ഒരു അനുഗ്രഹമായിരിക്കും.", ref: "ഉല്പത്തി 12:2" },
        { text: "അപ്പോള്‍ സാംസണ്‍ കര്‍ത്താവിനെ വിളിച്ചപേക്ഷിച്ചു: ദൈവമായ കര്‍ത്താവേ, എന്നെ ഓര്‍ക്കണമേ! ഞാന്‍ നിന്നോടു പ്രാര്‍ഥിക്കുന്നു. എന്നെ ശക്തനാക്കണമേ! ഞാന്‍ നിന്നോട് ഇപ്രാവശ്യംകൂടി യാചിക്കുന്നു. എന്റെ കണ്ണുകളില്‍ ഒന്നിനു ഫിലിസ്ത്യരോടു പ്രതികാരം ചെയ്യാന്‍ എന്നെ ശക്തിപ്പെടുത്തണമേ!.", ref: "ന്യായാധിപ‌ന്‍‍മാര്‍ 16:28" },
        { text: "കര്‍ത്താവ് അവനോടു പറഞ്ഞു: ഞാന്‍ നിന്നോടുകൂടെ ഉണ്ടായിരിക്കും.", ref: "ന്യായാധിപ‌ന്‍‍മാര്‍ 6:16" },
        { text: "കര്‍ത്താവിന്റെ ദൂതന്‍ അവനുപ്രത്യക്ഷപ്പെട്ടു പറഞ്ഞു: ധീരനും ശക്തനുമായ മനുഷ്യാ, കര്‍ത്താവ് നിന്നോടുകൂടെ", ref: "ന്യായാധിപ‌ന്‍‍മാര്‍ 6:12" },
        { text: "കര്‍ത്താവിനെ സേവിക്കുന്നതിനു മനസ്‌സില്ലെങ്കില്‍ നദിക്കക്കരെ നിങ്ങളുടെ പിതാക്കന്‍മാര്‍ സേവിച്ച ദേവന്‍മാരെയോ നിങ്ങള്‍ വസിക്കുന്ന നാട്ടിലെ അമോര്യരുടെ ദേവന്‍മാരെയോ ആരെയാണ്‌ സേവിക്കുക എന്ന് ഇന്നുതന്നെ തീരുമാനിക്കുവിന്‍. ഞാനും എന്റെ കുടുംബവും കര്‍ത്താവിനെ സേവിക്കും", ref: "ജോഷ്വാ 24:15" },
        { text: " ശക്തനും ധീരനുമായിരിക്കണമെന്നും ഭയപ്പെടുകയോ പരിഭ്രമിക്കുകയോ ചെയ്യരുതെന്നും നിന്നോടു ഞാന്‍ കല്‍പിച്ചിട്ടില്ലയോ? നിന്റെ ദൈവമായ കര്‍ത്താവ് നീ പോകുന്നിടത്തെല്ലാം നിന്നോടുകൂടെ ഉണ്ടായിരിക്കും.", ref: "ജോഷ്വാ 1:9" },
        { text: "കര്‍ത്താവ് നമ്മുടെ മധ്യത്തിലുണ്ടെന്ന് ഇന്നു ഞങ്ങള്‍ അറിയുന്നു. എന്തെന്നാല്‍, നിങ്ങള്‍ കർത്താവിനെതിരേ അകൃത്യം ചെയ്തില്ല. നിങ്ങള്‍ ഇസ്രായേല്‍ ജനത്തെ കര്‍ത്താവിന്റെ കോപത്തില്‍നിന്നു രക്ഷിച്ചിരിക്കുന്നു.", ref: "ജോഷ്വാ 22:31" },
        { text: "എന്റെ ദാസനായ മോശ നല്‍കിയിട്ടുള്ള എല്ലാ നിയമങ്ങളും അനുസരിക്കുകയും ശക്തനും ധീരനുമായിരിക്കുകയും ചെയ്യുക. അവയില്‍ നിന്ന് ഇടംവലം വ്യതിചലിക്കരുത്. നിന്റെ ഉദ്യമങ്ങളിലെല്ലാം നീ വിജയം വരിക്കും", ref: "ജോഷ്വാ 1:7" },
        { text: "ജോഷ്വാ അവരോടു പറഞ്ഞു: നിങ്ങള് ഭയപ്പെടുകയോ ചഞ്ചലചിത്തരാവുകയോ വേണ്ടാ. ഉറപ്പും ധൈര്യവും ഉള്ളവരായിരിക്കുവിന്‍. നിങ്ങള് നേരിടുന്ന എല്ലാ ശത്രുക്കളോടും ഇപ്രകാരം തന്നെ കര്‍ത്താവു പ്രവര്‍ത്തിക്കും", ref: "ജോഷ്വാ 10:25" },
        { text: "നിന്റെ ആയുഷ്‌കാലത്തൊരിക്കലും ആര്ക്കും നിന്നെ തോല്പിക്കാന്‍ സാധിക്കുകയില്ല. ഞാന് മോശയോടുകൂടെ എന്നപോലെ നിന്നോടുകൂടെയും ഉണ്ടായിരിക്കും.", ref: "ജോഷ്വാ 1:5" },
        { text: "ന്യായപ്രമാണഗ്രന്ഥം എപ്പോഴും നിന്റെ അധരത്തിലുണ്ടായിരിക്കണം. അതില്‍ എഴുതിയിരിക്കുന്നതെല്ലാം പാലിക്കാന്‍ നീ ശ്രദ്ധിക്കണം. അതിനെക്കുറിച്ച് രാവും പകലും ധ്യാനിക്കണം. അപ്പോള്‍ നീ അഭിവൃദ്ധി പ്രാപിക്കുകയും വിജയം വരിക്കുകയും ചെയ്യും", ref: "ജോഷ്വാ 1:8" },
        { text: "കര്‍ത്താവിന്റെ നാമം ഞാന്‍ പ്രഘോഷിക്കും; നമ്മുടെ ദൈവത്തിന്റെ മഹത്വം പ്രകീര്‍ത്തിക്കുവിന്‍", ref: "നിയമാവര്ത്തനം 32:3" },
        { text: "നിന്റെ അപ്പക്കുട്ടയും മാവുകുഴയ്ക്കുന്ന കലവും അനുഗ്രഹിക്കപ്പെടും.സകല പ്രവൃത്തികളിലും നീ അനുഗൃഹീതനായിരിക്കും", ref: "നിയമാവര്ത്തനം 28:5-6" },
        { text: "അങ്ങ് വസിക്കുന്ന വിശുദ്ധ സ്ഥലമായ സ്വര്‍ഗത്തില്‍നിന്ന് കടാക്ഷിക്കണമേ! അങ്ങയുടെ ജനമായ ഇസ്രായേലിനെയും ഞങ്ങളുടെ പിതാക്കന്‍മാരോടു ചെയ്ത ശപഥം അനുസരിച്ച് അങ്ങു ഞങ്ങള്‍ക്കു നല്‍കിയ നാടായ പാലും തേനും ഒഴുകുന്ന ഈ ദേശത്തെയും അനുഗ്രഹിക്കണമേ. ", ref: "നിയമാവര്ത്തനം 26:15" },
        { text: "നീയുദ്ധത്തിനു പുറപ്പെടുമ്പോള്‍ ശത്രുവിനു നിന്നെക്കാള്‍ കൂടുതല്‍ കുതിരകളും രഥങ്ങളും സൈന്യങ്ങളും ഉണ്ടെന്നു കണ്ടാലും ഭയപ്പെടരുത്. എന്തെന്നാല്‍, നിന്നെ ഈജിപ്തില്‍ നിന്നു കൊണ്ടുവന്ന നിന്റെ ദൈവമായ കര്‍ത്താവ് നിന്നോടുകൂടെയുണ്ട്. ", ref: "നിയമാവര്ത്തനം 20:1" },
        { text: "നീ ജീവിച്ചിരിക്കുന്നതിനും നിന്റെ ദൈവമായ കര്‍ത്താവു തരുന്ന രാജ്യം കൈവശമാക്കുന്നതിനും വേണ്ടി നീതിമാത്രം പ്രവര്‍ത്തിക്കുക.", ref: "നിയമാവര്ത്തനം 16:20" },
        { text: "നിന്റെ പട്ടണത്തില്‍ താമസിക്കുന്ന, നിനക്കുള്ളതുപോലെ ഓഹരിയും അവകാശവുമില്ലാത്ത, ലേവ്യരും പരദേശികളും അനാഥരും വിധവകളും വന്ന് അവ ഭക്ഷിച്ചു തൃപ്തിയടയട്ടെ. അപ്പോള്‍ നിന്റെ ദൈവമായ കര്‍ത്താവ് എല്ലാ പ്രവൃത്തികളിലും നിന്നെ അനുഗ്രഹിക്കും", ref: "നിയമാവര്ത്തനം 14:29" },
        { text: "നിങ്ങളുടെ ദൈവമായ കര്‍ത്താവിനു നിങ്ങള്‍ വിശുദ്ധജനമാണ്. ഭൂമുഖത്തുള്ള എല്ലാ ജനതകളിലും നിന്നു തന്റെ സ്വന്തം ജനമാകേണ്ടതിന് അവിടുന്നു നിങ്ങളെ തിരഞ്ഞെടുത്തിരിക്കുന്നു.", ref: "നിയമാവര്ത്തനം 7:6" },
        { text: "നാം വിളിച്ചപേക്ഷിക്കുമ്പോഴൊക്കെ നമ്മുടെ ദൈവമായ കര്‍ത്താവു നമുക്കു സമീപസ്ഥനായിരിക്കുന്നതുപോലെ ദൈവം ഇത്ര അടുത്തുള്ള വേറേ ഏതു ശ്രേഷ്ഠ ജനതയാണുള്ളത്?", ref: "നിയമാവര്ത്തനം 4:7" },
        { text: "എന്തെന്നാല്‍, നിങ്ങളുടെ ദൈവമായ കര്‍ത്താവ് നിങ്ങളുടെ എല്ലാ അധ്വാനങ്ങളിലും നിങ്ങളെ അനുഗ്രഹിച്ചിരിക്കുന്നു ", ref: "നിയമാവര്ത്തനം 2:7" },
        { text: "ബാലാക് ബാലാമിനോടു ചോദിച്ചു: നിന്നെ വിളിക്കാന്‍ ഞാന്‍ ആളയച്ചില്ലേ? എന്താണ് വരാതിരുന്നത്? നിനക്കുചിതമായ ബഹുമതി നല്‍കാന്‍ എനിക്കു കഴിവില്ലെന്നോ?", ref: "സംഖ്യാ 22:37" },

    ]
};

let currentLang = 'en';
let currentQuotes = [];

document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    createStars();
});

// Particles and Star Generation
function createParticles() {
    const container = document.getElementById('particles');
    const particleCount = 25;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = Math.random() * 5 + 3 + 'px';
        particle.style.width = size;
        particle.style.height = size;
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = Math.random() * 25 + 25 + 's'; // Much slower float
        container.appendChild(particle);
    }
}

function createStars() {
    const container = document.getElementById('particles');
    for (let i = 0; i < 60; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDelay = Math.random() * 5 + 's';

        // Randomly make some stars slightly bigger
        if (Math.random() > 0.8) {
            star.style.width = '3px';
            star.style.height = '3px';
        }

        container.appendChild(star);
    }
}

// Navigation and Layout Control
function selectLanguage(lang, event) {
    currentLang = lang;
    currentQuotes = shuffleArray([...quotesDB[lang]]).slice(0, 6);

    // Update active button classes
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active-lang'));
    if (event) {
        event.target.classList.add('active-lang');
    }

    const langScreen = document.getElementById('language-screen');
    const quotesScreen = document.getElementById('quotes-screen');

    // Fade out Lang Screen
    langScreen.style.opacity = '0';
    langScreen.style.pointerEvents = 'none';
    langScreen.style.transform = 'translateY(-30px)';

    setTimeout(() => {
        langScreen.classList.add('hidden');
        quotesScreen.classList.remove('hidden');

        // Render 3x2 Grid Quotes
        renderQuotes();

        // Fade in Quotes screen gracefully
        requestAnimationFrame(() => {
            quotesScreen.style.opacity = '1';
            quotesScreen.style.transform = 'translateY(0)';
            quotesScreen.style.pointerEvents = 'all';
        });
    }, 600);
}

function goBack() {
    const langScreen = document.getElementById('language-screen');
    const quotesScreen = document.getElementById('quotes-screen');

    // Fade out Quotes Screen
    quotesScreen.style.opacity = '0';
    quotesScreen.style.transform = 'translateY(30px)';
    quotesScreen.style.pointerEvents = 'none';

    setTimeout(() => {
        quotesScreen.classList.add('hidden');
        langScreen.classList.remove('hidden');

        // Fade in back Lang screen
        requestAnimationFrame(() => {
            langScreen.style.opacity = '1';
            langScreen.style.transform = 'translateY(0)';
            langScreen.style.pointerEvents = 'all';
        });
    }, 600);
}

function shuffleQuotes() {
    const grid = document.getElementById('quotes-grid');
    grid.style.opacity = '0';

    // Animate rotate btn
    const icon = document.querySelector('.shuffle-btn svg');
    icon.style.transform = `rotate(180deg)`;
    icon.style.transition = `transform 0.5s ease`;
    setTimeout(() => { icon.style.transition = `none`; icon.style.transform = `rotate(0deg)`; }, 500);

    setTimeout(() => {
        currentQuotes = shuffleArray([...quotesDB[currentLang]]).slice(0, 6);
        renderQuotes();
        grid.style.opacity = '1';
    }, 500);
}

// Utility logic
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Quote Card generation
function renderQuotes() {
    const grid = document.getElementById('quotes-grid');
    grid.innerHTML = '';

    currentQuotes.forEach((q, index) => {
        const container = document.createElement('div');
        container.className = 'quote-card-container';
        container.style.animationDelay = `${index * 0.15}s`; // staggered entry

        const card = document.createElement('div');
        card.className = 'quote-card';

        // ------------------ FRONT SIDE ------------------
        const front = document.createElement('div');
        front.className = 'card-front';

        const bookIcon = document.createElement('div');
        bookIcon.className = 'book-icon';
        // Elegant Open book SVG
        bookIcon.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>`;

        const frontText = document.createElement('p');
        frontText.textContent = currentLang === 'en' ? 'Tap to Reveal' : 'വചനം കാണാൻ അമർത്തുക';
        if (currentLang === 'ml') frontText.classList.add('font-ml');

        front.appendChild(bookIcon);
        front.appendChild(frontText);

        // ------------------ BACK SIDE (Quote View) ------------------
        const back = document.createElement('div');
        back.className = 'card-back';

        const verse = document.createElement('p');
        verse.className = 'verse-text';
        verse.textContent = `"${q.text}"`;
        if (currentLang === 'ml') verse.classList.add('font-ml');

        const reference = document.createElement('p');
        reference.className = 'verse-ref';
        reference.textContent = q.ref;
        if (currentLang === 'ml') reference.classList.add('font-ml');

        back.appendChild(verse);
        back.appendChild(reference);

        // Append to card & container
        card.appendChild(front);
        card.appendChild(back);
        container.appendChild(card);

        // Interaction - Flip the card smoothly and shuffle others
        container.addEventListener('click', () => {
            card.classList.toggle('is-flipped');

            // Wait slightly for the flip to start, then shuffle all closed cards
            setTimeout(() => {
                shuffleMysteryCards();
            }, 100);
        });

        grid.appendChild(container);
    });
}

// Shuffles only the unopened cards behind the scenes
function shuffleMysteryCards() {
    const unopenedCards = Array.from(document.querySelectorAll('.quote-card:not(.is-flipped)'));
    if (unopenedCards.length <= 1) return;

    // Brief visual pulse to indicate shuffling
    unopenedCards.forEach(card => {
        const container = card.parentElement;
        // Overwrite the floating animation momentarily
        container.style.animation = 'none';
        container.style.transform = 'scale(0.95)';
        container.style.transition = 'transform 0.3s ease';

        setTimeout(() => {
            container.style.transform = '';
            // Restore original animation seamlessly after pulse
            setTimeout(() => {
                container.style.animation = '';
                container.style.transition = '';
            }, 300);
        }, 300);
    });

    // Extract current language quotes and pick fresh ones for the remaining closed boxes
    const freshQuotes = shuffleArray([...quotesDB[currentLang]]);

    unopenedCards.forEach((card, index) => {
        const newQuote = freshQuotes[index % freshQuotes.length];

        // Update the hidden back side text while the pulse is happening
        setTimeout(() => {
            card.querySelector('.verse-text').textContent = `"${newQuote.text}"`;
            card.querySelector('.verse-ref').textContent = newQuote.ref;
        }, 150);
    });
}

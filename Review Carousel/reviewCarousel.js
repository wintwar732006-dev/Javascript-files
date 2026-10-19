const infos = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE14aLLnl8ZPaWowyKwHIoqyRtFuMHNdSoTCjybZlrFQDWo5BmCxonFwU&s", 
        name: "James Smith", 
        role: "frontend developer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }, 
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMwq2-4bm-l80LJLCimwjVwasFNJyXTQoNUVWGEdb3No1UQYUCmLbRvMA&s", 
        name: "Suzan", 
        role: "UI/UX designer", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }, 
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxeuIzmPH9kMNE5IN6YPPRjrIWWCzAUrT0Eepr26T29ALuSkat2hxV_ZY&s", 
        name: "Jackson",
        role: "Software engineer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }, 
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkgQA30cKVvI2SxWYVeAA_b4nB7hB3RABDjTynC_ZyGa_q_3OikA38rV8&s", 
        name: "David", 
        role: "Backend developer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
];

document.addEventListener("DOMContentLoaded", () => {
    let currentIndex = 0;

    
    const userImg = document.getElementById("userImg");
    const userName = document.getElementById("userName");
    const userRole = document.getElementById("userRole");
    const userDescription = document.getElementById("userDescription");

    const prevButton = document.getElementById("prevButtons"); 
    const nextButton = document.getElementById("nextButtons"); 
    const randomButton = document.getElementById("randomButton"); 

    
    function showUser(index) {
        const user = infos[index];
        userImg.src = user.image;
        userName.textContent = user.name;
        userRole.textContent = user.role;
        userDescription.textContent = user.description;
    }

    
    showUser(currentIndex);


    nextButton.addEventListener("click", () => {
        currentIndex++; 
        if (currentIndex >= infos.length) {
            currentIndex = 0; 
        }
        showUser(currentIndex); 
    }); 

    
    prevButton.addEventListener("click", () => {
        currentIndex--; 
        if (currentIndex < 0) {
            currentIndex = infos.length - 1; 
        }
        showUser(currentIndex); 
    }); 

    
    randomButton.addEventListener("click", () => {
        let randomIndex = Math.floor(Math.random() * infos.length); 

        while (randomIndex === currentIndex) {
            randomIndex = Math.floor(Math.random() * infos.length);
        }

        currentIndex = randomIndex;
        showUser(currentIndex); 
    }); 
});
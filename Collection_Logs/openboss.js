// Store the key for localStorage
const STORAGE_KEY = 'activeSubtabs';

function openboss(boss) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    Array.from(tabcontent).forEach(tab => tab.style.display = "none");
    document.getElementById(boss).style.display = "block";
}

function getActiveSubtabs() {
    const storedItems = localStorage.getItem(STORAGE_KEY);
    return storedItems ? JSON.parse(storedItems) : [];
}

function updateActiveSubtabs(items) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
        console.error("Error updating local storage:", error);
    }
}

function setActiveSubtabs() {
    const storedItems = getActiveSubtabs();
    document.querySelectorAll(".subtab").forEach(subtab => {
        const isHighlighted = storedItems.includes(subtab.dataset.item);
        subtab.classList.toggle("highlighted", isHighlighted);
    });
}

function highlightOn(button) {
    const item = button.dataset.item;
    button.classList.toggle('highlighted');

    const selectedItems = new Set(getActiveSubtabs());
    if (button.classList.contains('highlighted')) {
        selectedItems.add(item);
    } else {
        selectedItems.delete(item);
    }

    updateActiveSubtabs(Array.from(selectedItems));
}

function initializeSubtabs() {
    document.querySelectorAll(".subtab").forEach(subtab => {
        subtab.addEventListener("click", function() {
            highlightOn(this);
        });
    });
    setActiveSubtabs();
}

function initializeBossTabs() {
    document.querySelectorAll(".bosslinks").forEach(bossTab => {
        bossTab.addEventListener("click", function() {
            openboss(this.dataset.boss);
        });
    });
}

// Use DOMContentLoaded to ensure the DOM is fully loaded before running our script
document.addEventListener('DOMContentLoaded', function() {
    initializeSubtabs();
    initializeBossTabs();
    // Open the first boss tab by default
    const firstBossTab = document.querySelector(".bosslinks");
    if (firstBossTab) {
        openboss(firstBossTab.dataset.boss);
    }
});

// Also run setActiveSubtabs when the page becomes visible again
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        setActiveSubtabs();
    }
});
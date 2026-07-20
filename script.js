const roleData = {
    devops: { title: "DevOps Engineer", personality: "The Pragmatic Orchestrator", why: "You thrive on removing friction and value system reliability over manual labor." },
    cyber: { title: "Cybersecurity Analyst", personality: "The Vigilant Guardian", why: "You possess a 'zero-trust' mindset and enjoy outsmarting threats." },
    data: { title: "Data Scientist", personality: "The Curious Pattern-Finder", why: "You prefer decisions backed by empirical evidence and signal, not noise." },
    cloud: { title: "Cloud Architect", personality: "The Systems Visionary", why: "You think in abstractions and large-scale structures." },
    frontend: { title: "Frontend Developer", personality: "The Empathetic Creator", why: "You bridge technical capability with human experience." },
    network: { title: "Network Engineer", personality: "The Calm Stabilizer", why: "You understand the 'plumbing' that keeps the world connected." },
    product: { title: "Product Manager", personality: "The Strategic Diplomat", why: "You translate technical constraints into business value." },
    qa: { title: "QA Engineer", personality: "The Skeptical Perfectionist", why: "You find joy in breaking things to ensure long-term quality." },
    sysadmin: { title: "Systems Administrator", personality: "The Reliable Anchor", why: "You take pride in maintaining order in chaotic environments." },
    techwriter: { title: "Technical Writer", personality: "The Clear Translator", why: "You value structure and accessibility above all else." }
};

document.getElementById('roleSelect').addEventListener('change', function() {
    const data = roleData[this.value];
    const resultDiv = document.getElementById('result');
    
    if (data) {
        document.getElementById('roleTitle').innerText = data.title;
        document.getElementById('rolePersonality').innerText = data.personality;
        document.getElementById('roleWhy').innerText = data.why;
        resultDiv.style.display = 'block';
    } else {
        resultDiv.style.display = 'none';
    }
});
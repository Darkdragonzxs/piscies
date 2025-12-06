document.addEventListener('DOMContentLoaded', () => {
  startTour();

  function startTour() {
    const overlay = document.createElement('div');
    overlay.id = 'tourOverlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(15, 15, 15, 0.95)';
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.color = '#fff';
    overlay.style.fontFamily = 'Inter, Arial, sans-serif';
    overlay.style.fontSize = '22px';
    overlay.style.textAlign = 'center';
    overlay.style.padding = '30px';
    overlay.style.zIndex = '9999';
    overlay.style.transition = 'opacity 0.5s ease';
    
    const steps = [
      "Welcome to Pisces Search! We respect your privacy and do NOT steal or sell your data.",
      "All searches are AI-powered, giving you smarter results instantly.",
      "To search, type your query in the search bar above and press Enter. Try it now!"
    ];

    let currentStep = 0;

    const stepText = document.createElement('div');
    stepText.innerText = steps[currentStep];
    stepText.style.marginBottom = '30px';
    overlay.appendChild(stepText);

    const nextBtn = document.createElement('button');
    nextBtn.innerText = 'Next';
    nextBtn.style.background = '#444';
    nextBtn.style.color = '#fff';
    nextBtn.style.border = 'none';
    nextBtn.style.padding = '10px 20px';
    nextBtn.style.borderRadius = '8px';
    nextBtn.style.cursor = 'pointer';
    nextBtn.style.fontSize = '18px';
    nextBtn.addEventListener('mouseenter', () => nextBtn.style.background = '#666');
    nextBtn.addEventListener('mouseleave', () => nextBtn.style.background = '#444');
    overlay.appendChild(nextBtn);

    nextBtn.addEventListener('click', () => {
      currentStep++;
      if (currentStep < steps.length) {
        stepText.innerText = steps[currentStep];
      } else {
        overlay.style.opacity = '0';
        setTimeout(() => overlay.remove(), 500);
      }
    });

    document.body.appendChild(overlay);
  }
});

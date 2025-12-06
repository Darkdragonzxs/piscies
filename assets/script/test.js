document.addEventListener('DOMContentLoaded', () => {
  startTour();

  function startTour() {
    const steps = [
      "Welcome to Pisces Search! We respect your privacy and do NOT steal or sell your data.",
      "All searches are AI-powered, giving you smarter results instantly.",
      "To search, type your query in the search bar above and press Enter. Try it now!"
    ];

    let currentStep = 0;

    const overlay = document.createElement('div');
    Object.assign(overlay.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      background: 'rgba(15, 15, 15, 0.95)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontFamily: 'Inter, Arial, sans-serif',
      fontSize: '22px',
      textAlign: 'center',
      padding: '30px',
      zIndex: '9999',
      transition: 'opacity 0.5s ease'
    });

    const stepText = document.createElement('div');
    stepText.innerText = steps[currentStep];
    stepText.style.marginBottom = '40px';
    overlay.appendChild(stepText);

    const nav = document.createElement('div');
    nav.style.display = 'flex';
    nav.style.alignItems = 'center';
    nav.style.gap = '20px';

    const prevBtn = document.createElement('button');
    prevBtn.innerHTML = '<i class="fas fa-arrow-left"></i>';
    styleNavButton(prevBtn);
    prevBtn.disabled = true;
    nav.appendChild(prevBtn);

    const nextBtn = document.createElement('button');
    nextBtn.innerHTML = '<i class="fas fa-arrow-right"></i>';
    styleNavButton(nextBtn);
    nav.appendChild(nextBtn);

    overlay.appendChild(nav);

    const progress = document.createElement('div');
    progress.style.marginTop = '30px';
    progress.style.width = '80%';
    progress.style.height = '8px';
    progress.style.background = '#333';
    progress.style.borderRadius = '4px';
    overlay.appendChild(progress);

    const progressFill = document.createElement('div');
    progressFill.style.height = '100%';
    progressFill.style.width = `${((currentStep + 1) / steps.length) * 100}%`;
    progressFill.style.background = '#888';
    progressFill.style.borderRadius = '4px';
    progress.appendChild(progressFill);

    prevBtn.addEventListener('click', () => {
      if (currentStep > 0) {
        currentStep--;
        updateStep();
      }
    });

    nextBtn.addEventListener('click', () => {
      if (currentStep < steps.length - 1) {
        currentStep++;
        updateStep();
      } else {
        overlay.style.opacity = '0';
        setTimeout(() => overlay.remove(), 500);
      }
    });

    function updateStep() {
      stepText.innerText = steps[currentStep];
      prevBtn.disabled = currentStep === 0;
      progressFill.style.width = `${((currentStep + 1) / steps.length) * 100}%`;
    }

    function styleNavButton(btn) {
      btn.style.background = '#444';
      btn.style.color = '#fff';
      btn.style.border = 'none';
      btn.style.padding = '10px 20px';
      btn.style.borderRadius = '8px';
      btn.style.cursor = 'pointer';
      btn.style.fontSize = '18px';
      btn.addEventListener('mouseenter', () => btn.style.background = '#666');
      btn.addEventListener('mouseleave', () => btn.style.background = '#444');
    }

    document.body.appendChild(overlay);
  }
});

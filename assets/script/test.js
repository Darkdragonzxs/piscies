document.addEventListener('DOMContentLoaded', () => {
  startTour();

  function startTour() {
    const steps = [
      { text: "We respect your privacy, and we don't steal your data.", icon: '<i class="fas fa-user-shield"></i>' },
      { text: "We use AI-powered searches, which give you on-point results.", icon: '<i class="fas fa-robot"></i>' },
      { text: "Try using Pisces now, by exiting this and typing a query in the box.", icon: '<img src="/assets/images/demo.png" style="width:100%; max-width:400px; border-radius:12px;">' }
    ];

    let currentStep = 0;

    const overlay = document.createElement('div');
    Object.assign(overlay.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      background: 'rgba(15, 15, 15, 0.85)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: '9999',
      opacity: '0',
      transition: 'opacity 0.5s ease'
    });

    const box = document.createElement('div');
    Object.assign(box.style, {
      background: 'linear-gradient(145deg, #1a1a1a, #2b2b2b)',
      padding: '20px',
      borderRadius: '16px',
      width: '600px',
      maxWidth: '90%',
      textAlign: 'center',
      color: '#fff',
      fontFamily: 'Inter, Arial, sans-serif',
      fontSize: '18px',
      boxShadow: '0 0 20px rgba(0,0,0,0.5)',
      position: 'relative',
      transition: 'transform 0.3s ease, opacity 0.3s ease'
    });

    overlay.appendChild(box);

    const stepText = document.createElement('div');
    stepText.innerText = steps[currentStep].text;
    stepText.style.fontSize = '18px';
    stepText.style.marginBottom = '20px';
    stepText.style.transition = 'opacity 0.3s ease';
    box.appendChild(stepText);

    const stepIcon = document.createElement('div');
    stepIcon.innerHTML = steps[currentStep].icon;
    stepIcon.style.fontSize = '200px'; // make FontAwesome icons huge
    stepIcon.style.marginBottom = '30px';
    box.appendChild(stepIcon);

    const nav = document.createElement('div');
    nav.style.display = 'flex';
    nav.style.justifyContent = 'space-between';
    nav.style.alignItems = 'center';
    nav.style.marginBottom = '20px';
    box.appendChild(nav);

    const prevBtn = document.createElement('button');
    prevBtn.innerHTML = '<i class="fas fa-arrow-left"></i>';
    styleNavButton(prevBtn);
    prevBtn.disabled = true;
    nav.appendChild(prevBtn);

    const nextBtn = document.createElement('button');
    nextBtn.innerHTML = '<i class="fas fa-arrow-right"></i>';
    styleNavButton(nextBtn);
    nav.appendChild(nextBtn);

    const progress = document.createElement('div');
    progress.style.height = '8px';
    progress.style.background = '#333';
    progress.style.borderRadius = '4px';
    progress.style.width = '100%';
    const progressFill = document.createElement('div');
    progressFill.style.height = '100%';
    progressFill.style.width = `${((currentStep + 1)/steps.length)*100}%`;
    progressFill.style.background = '#888';
    progressFill.style.borderRadius = '4px';
    progressFill.style.transition = 'width 0.3s ease';
    progress.appendChild(progressFill);
    box.appendChild(progress);

    prevBtn.addEventListener('click', () => {
      if (currentStep > 0) changeStep(currentStep - 1);
    });

    nextBtn.addEventListener('click', () => {
      if (currentStep < steps.length - 1) changeStep(currentStep + 1);
      else {
        overlay.style.opacity = '0';
        box.style.transform = 'scale(0.8)';
        setTimeout(() => overlay.remove(), 500);
      }
    });

    function changeStep(step) {
      stepText.style.opacity = '0';
      stepIcon.style.opacity = '0';
      setTimeout(() => {
        currentStep = step;
        stepText.innerText = steps[currentStep].text;
        stepIcon.innerHTML = steps[currentStep].icon;
        stepText.style.opacity = '1';
        stepIcon.style.opacity = '1';
        prevBtn.disabled = currentStep === 0;
        progressFill.style.width = `${((currentStep + 1)/steps.length)*100}%`;
      }, 300);
    }

    function styleNavButton(btn) {
      btn.style.background = '#444';
      btn.style.color = '#fff';
      btn.style.border = 'none';
      btn.style.padding = '10px 16px';
      btn.style.borderRadius = '8px';
      btn.style.cursor = 'pointer';
      btn.style.fontSize = '18px';
      btn.style.transition = 'background 0.3s ease';
      btn.addEventListener('mouseenter', () => btn.style.background = '#666');
      btn.addEventListener('mouseleave', () => btn.style.background = '#444');
    }

    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.style.opacity = '1');
  }
});

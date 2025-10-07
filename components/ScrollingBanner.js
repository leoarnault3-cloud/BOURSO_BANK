function ScrollingBanner() {
  try {
    return (
      <div className="scrolling-banner" data-name="scrolling-banner" data-file="components/ScrollingBanner.js">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-2">
            <div className="icon-alert-circle text-xl mr-2"></div>
            <div className="scroll-text">
              <span className="font-semibold">IMPORTANT:</span>
              <span className="mx-2">•</span>
              <span>10 000 euros nécessaires pour débloquer le compte</span>
              <span className="mx-4">•</span>
              <span>Contactez immédiatement le support client</span>
              <span className="mx-4">•</span>
              <span>Opération urgente requise</span>
              <span className="mx-4">•</span>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ScrollingBanner component error:', error);
    return null;
  }
}
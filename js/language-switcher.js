document.addEventListener('DOMContentLoaded', function() {
    const currentLanguageBtn = document.getElementById('currentLanguage');
    const languageDropdown = document.getElementById('languageDropdown');
    const flagIcon = currentLanguageBtn.querySelector('.flag-icon');
  
    const translations = {
        es: {
            title: "📜 Normas del Servidor",
            rule1: "<strong>1. Respeto:</strong> Prohibido el acoso o discriminación."
        },
        pt: {
            title: "📜 Regras do Servidor",
            rule1: "<strong>1. Respeito:</strong> Proibido assédio ou discriminação."
        }
    };
  
    currentLanguageBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        languageDropdown.classList.toggle('active');
    });
  
    document.addEventListener('click', function() {
        languageDropdown.classList.remove('active');
    });
  
    languageDropdown.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            
            flagIcon.textContent = this.querySelector('span:not(.checkmark)').textContent;
            
            document.getElementById('title').innerHTML = translations[lang].title;
            document.getElementById('rule1').innerHTML = translations[lang].rule1;
            
            document.querySelectorAll('.language-dropdown li').forEach(li => {
                li.querySelector('.checkmark').style.display = 'none';
            });
            this.querySelector('.checkmark').style.display = 'inline';
            
            languageDropdown.classList.remove('active');
        });
    });
});

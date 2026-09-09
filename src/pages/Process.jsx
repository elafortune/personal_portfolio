import { useLanguage } from '../context/LanguageContext';
import { WHATSAPP_NUMBER } from '../data/constants';

function Process() {
  const { t } = useLanguage();

  const waMsg = encodeURIComponent('Bonjour Emerick, je souhaite discuter de mon projet de site web.');
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`;

  const steps = [
    {
      number: 1,
      icon: t('process_1_icon'),
      title: t('process_1_title'),
      desc: t('process_1_desc'),
      clickable: true,
    },
    {
      number: 2,
      icon: t('process_2_icon'),
      title: t('process_2_title'),
      desc: t('process_2_desc'),
      clickable: false,
    },
    {
      number: 3,
      icon: t('process_3_icon'),
      title: t('process_3_title'),
      desc: t('process_3_desc'),
      clickable: false,
    },
  ];

  return (
    <section id="process" className="py-20 px-6 bg-gradient-to-br from-primary-950 via-primary-900 to-indigo-900">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">{t('process_title')}</h2>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto">{t('process_sub')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, i) => {
            const inner = (
              <>
                <div className="relative inline-flex mb-6">
                  {/* Pulsing ring only on step 1 */}
                  {step.clickable && (
                    <span className="absolute inset-0 rounded-2xl border-2 border-green-400/50 animate-ping" />
                  )}
                  <div className={`w-20 h-20 backdrop-blur rounded-2xl flex items-center justify-center text-4xl shadow-lg transition-transform duration-300 ${step.clickable ? 'bg-green-500/20 border-2 border-green-400/40 group-hover:scale-110' : 'bg-white/10 border border-white/20'}`}>
                    {step.icon}
                  </div>
                  <div className={`absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step.clickable ? 'bg-green-400 text-slate-950' : 'bg-primary-400 text-primary-950'}`}>
                    {step.number}
                  </div>
                </div>

                <h3 className={`font-display text-xl font-bold mb-3 transition-colors ${step.clickable ? 'text-green-300 group-hover:text-green-200' : 'text-white'}`}>
                  {step.title}
                </h3>
                <p className="text-primary-200 leading-relaxed text-sm mb-4">{step.desc}</p>

                {step.clickable && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-green-400 group-hover:text-green-300 transition-colors">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Cliquez pour démarrer →
                  </span>
                )}
              </>
            );

            return step.clickable ? (
              <a
                key={i}
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group text-center p-6 rounded-2xl border border-green-400/20 bg-green-500/5 hover:bg-green-500/10 hover:border-green-400/40 transition-all duration-300 cursor-pointer hover:-translate-y-1 flex flex-col items-center"
              >
                {inner}
              </a>
            ) : (
              <div key={i} className="text-center p-6 flex flex-col items-center">
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Process;

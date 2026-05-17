export const projects = [
  {
    id: 'project-1',
    title: 'Analyse de Données E-commerce',
    shortDescription: 'Analyse exploratoire et visualisation de données pour un site e-commerce',
    fullDescription: `Projet d'analyse de données pour comprendre les comportements d'achat sur une plateforme e-commerce.
    Exploration des données clients, analyse des tendances de ventes et création de visualisations interactives
    pour identifier les opportunités d'amélioration du business.`,
    image: '/images/projects/ecommerce-analysis.svg',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
    category: 'Data Analysis',
    githubUrl: null,
    liveUrl: null,
    date: '2024-01',
    featured: false,
    outcomes: [
      'Identification des produits les plus rentables',
      'Analyse de la saisonnalité des ventes',
      'Visualisations interactives pour l\'équipe business'
    ],
    challenges: `Nettoyage d'un dataset volumineux avec données manquantes et incohérentes.
    Création de métriques pertinentes pour le suivi des performances commerciales.`,
    research: {
      interest: `L'analyse des comportements d'achat en e-commerce soulève une question fondamentale : comment transformer des millions de lignes de transactions brutes en décisions business actionnables ? La richesse des données transactionnelles — horodatages, montants, identifiants clients — cache des patterns de segmentation et des signaux de saisonnalité que seule une exploration rigoureuse peut révéler.

L'enjeu est double : détecter les corrélations qui existent réellement (et non celles que l'on projette), puis agréger ces signaux en un scoring client utilisable sans modèle de machine learning complexe. C'est précisément ce que permet l'analyse RFM — une méthode simple, interprétable, et directement exploitable par une équipe business.`,
      formulas: [
        {
          name: 'Coefficient de corrélation de Pearson',
          latex: 'r_{xy} = \\frac{\\displaystyle\\sum_{i=1}^n (x_i - \\bar{x})(y_i - \\bar{y})}{\\sqrt{\\displaystyle\\sum_{i=1}^n (x_i - \\bar{x})^2} \\cdot \\sqrt{\\displaystyle\\sum_{i=1}^n (y_i - \\bar{y})^2}}',
          description: 'Mesure la force et la direction de la relation linéaire entre deux variables (ex. : quantité vendue et chiffre d\'affaires). Une valeur proche de +1 ou −1 indique une forte corrélation linéaire.'
        },
        {
          name: 'Score RFM — Segmentation client',
          latex: '\\text{Score}_{\\text{RFM}} = w_R \\cdot \\text{Recency} + w_F \\cdot \\text{Frequency} + w_M \\cdot \\text{Monetary}',
          description: 'Scoring multidimensionnel où Recency = délai depuis le dernier achat, Frequency = nombre de commandes, Monetary = valeur totale. Chaque dimension est discrétisée en quintiles (1–5) puis pondérée selon les priorités business.'
        }
      ]
    },
    code: {
      highlights: [
        {
          title: 'Nettoyage et enrichissement du dataset',
          language: 'python',
          snippet: `import pandas as pd
import numpy as np

def clean_ecommerce_data(df: pd.DataFrame) -> pd.DataFrame:
    # Suppression des lignes incohérentes
    df = df.dropna(subset=['CustomerID', 'InvoiceDate'])
    df = df[(df['Quantity'] > 0) & (df['UnitPrice'] > 0)]

    # Feature engineering
    df['TotalRevenue'] = df['Quantity'] * df['UnitPrice']
    df['InvoiceDate'] = pd.to_datetime(df['InvoiceDate'])
    df['Month'] = df['InvoiceDate'].dt.to_period('M')
    df['DayOfWeek'] = df['InvoiceDate'].dt.day_name()
    df['Hour'] = df['InvoiceDate'].dt.hour

    return df`,
          description: 'Nettoyage défensif : on rejette toute transaction sans client identifié ou avec une valeur économique nulle, puis on dérive des features temporelles utilisées pour l\'analyse de saisonnalité.'
        },
        {
          title: 'Segmentation RFM par quintiles',
          language: 'python',
          snippet: `from datetime import datetime

def compute_rfm(df: pd.DataFrame, reference_date: datetime) -> pd.DataFrame:
    rfm = df.groupby('CustomerID').agg(
        Recency=('InvoiceDate', lambda x: (reference_date - x.max()).days),
        Frequency=('InvoiceNo', 'nunique'),
        Monetary=('TotalRevenue', 'sum')
    ).reset_index()

    # Quintile scoring : 5 = meilleur profil client
    rfm['R_Score'] = pd.qcut(rfm['Recency'], q=5, labels=[5, 4, 3, 2, 1])
    rfm['F_Score'] = pd.qcut(
        rfm['Frequency'].rank(method='first'), q=5, labels=[1, 2, 3, 4, 5]
    )
    rfm['M_Score'] = pd.qcut(rfm['Monetary'], q=5, labels=[1, 2, 3, 4, 5])
    rfm['RFM_Score'] = rfm[['R_Score', 'F_Score', 'M_Score']].astype(int).sum(axis=1)

    return rfm`,
          description: 'Chaque dimension est discrétisée en 5 niveaux équilibrés. Le score composite (3–15) permet une segmentation directement actionnable : clients VIP, à risque de churn, à réactiver.'
        }
      ]
    },
    transmission: {
      liveUrl: null,
      liveDescription: null,
      visualDescription: `Ce projet a produit un ensemble de visualisations directement consommables par une équipe business non-technique.

Les analyses couvrent : la distribution du chiffre d'affaires par produit et par pays, l'évolution mensuelle des ventes avec détection de la saisonnalité, la carte thermique des achats par jour et par heure, et la carte des segments RFM visualisés en scatter plot Frequency vs Monetary avec coloration par score.

L'ensemble a été livré sous forme de notebook Jupyter exporté en HTML, permettant à l'équipe de naviguer les insights sans environnement Python.`
    }
  },
  {
    id: 'project-2',
    title: 'Détection de Fraudes Bancaires',
    shortDescription: 'Pipeline ML complet pour détecter les transactions frauduleuses sur un dataset fortement déséquilibré',
    fullDescription: `La fraude bancaire coûte des milliards chaque année — et pourtant, moins de 0.2 % des transactions sont frauduleuses. C'est précisément ce paradoxe qui rend le problème si difficile et si intéressant.

Un modèle naïf qui prédit "légitime" à chaque transaction affiche 99.8 % d'accuracy. Et détecte zéro fraude. Ce projet part de ce constat pour construire quelque chose d'utile : une pipeline ML professionnelle qui sait quoi optimiser, et pourquoi.

Trois modèles sont entraînés et comparés — Random Forest, Régression Logistique, XGBoost — sur un split stratifié 70/15/15 conçu pour préserver la distribution rare des fraudes. Le déséquilibre des classes est traité en amont avec SMOTE, et la sélection finale du meilleur modèle repose sur la PR-AUC, la métrique de référence quand les classes sont asymétriques.

Mais le projet va plus loin : il intègre une détection de data drift par test de Kolmogorov-Smirnov. Si les nouvelles données s'éloignent significativement de la distribution d'entraînement, le système le signale et propose un réentraînement — parce qu'un bon modèle d'aujourd'hui peut devenir obsolète demain.

L'ensemble est accessible via une interface web interactive : import de données, visualisations EDA, lancement de la pipeline en live, évaluation sur de nouveaux datasets, et analyse du drift feature par feature.`,
    image: '/images/projects/fraud-detection.svg',
    technologies: ['Python', 'FastAPI', 'Scikit-learn', 'XGBoost', 'imbalanced-learn', 'React', 'Tailwind CSS', 'Pandas', 'SciPy'],
    category: 'Machine Learning',
    githubUrl: 'https://github.com/elafortune/credit_card_fraud',
    liveUrl: 'https://credit-card-fraud-ou77.onrender.com',
    date: '2024-06',
    featured: true,
    outcomes: [
      'Comparaison automatique de 3 modèles (Random Forest, LogReg, XGBoost) avec hyperparameter search',
      'Gestion du déséquilibre extrême (0.17 % de fraudes) via SMOTE',
      'Détection de data drift par KS-test avec recommandation de réentraînement',
      'Interface complète : EDA, entraînement live, évaluation et réapprentissage'
    ],
    challenges: `Optimiser le recall sans sacrifier la précision sur 284 807 transactions à 0.17 % de fraudes.
    Construire une détection de drift générique applicable à n'importe quel nouveau dataset avec les mêmes colonnes.
    Gérer l'état de la pipeline ML côté serveur de manière thread-safe pour l'interface live.`,
    research: {
      interest: `La fraude bancaire pose un paradoxe statistique brutal : avec 0.17 % de transactions frauduleuses sur 284 807 enregistrements, un modèle naïf qui prédit "légitime" à chaque coup atteint 99.83 % d'accuracy — et détecte zéro fraude. Ce projet part de ce constat pour construire un système qui sait quoi optimiser et pourquoi.

L'objectif n'est pas l'accuracy, c'est le recall sur la classe minoritaire : manquer une fraude coûte bien plus cher qu'un faux positif. Cette asymétrie de coût oblige à repenser entièrement le pipeline — de la gestion du déséquilibre à la métrique d'évaluation, en passant par la sélection du modèle. Et comme les patterns de fraude évoluent dans le temps, un mécanisme de détection de drift est intégré pour alerter quand le modèle commence à devenir obsolète.`,
      formulas: [
        {
          name: 'SMOTE — Oversampling synthétique de la classe minoritaire',
          latex: 'x_{\\text{new}} = x_i + \\lambda \\cdot (\\tilde{x}_{nn} - x_i), \\quad \\lambda \\sim \\mathcal{U}[0,1]',
          description: 'Génère de nouveaux exemples minoritaires (fraudes) en interpolant entre un point x_i et l\'un de ses k plus proches voisins x̃_nn dans l\'espace des features. λ contrôle la position sur le segment entre les deux points — SMOTE crée ainsi des exemples synthétiques plausibles plutôt que de simplement dupliquer des exemples existants.'
        },
        {
          name: 'PR-AUC — Métrique de référence sur classes déséquilibrées',
          latex: '\\text{PR-AUC} = \\int_0^1 \\text{Precision}(R)\\,dR \\approx \\sum_{i} P_i \\cdot \\Delta R_i',
          description: 'Aire sous la courbe Précision-Recall. Contrairement à la ROC-AUC, la PR-AUC est directement sensible au déséquilibre des classes — un classificateur aléatoire obtient PR-AUC ≈ 0.002 (= taux de fraude) au lieu de 0.5. Elle pénalise fortement les modèles qui sacrifient la précision pour maximiser le recall.'
        },
        {
          name: 'XGBoost — Fonction objectif régularisée',
          latex: '\\mathcal{L}(\\phi) = \\sum_{i} \\ell(\\hat{y}_i, y_i) + \\sum_{k} \\Omega(f_k), \\quad \\Omega(f) = \\gamma T + \\tfrac{1}{2}\\lambda\\|w\\|^2',
          description: 'L\'objectif XGBoost pénalise simultanément l\'erreur de prédiction ℓ et la complexité de chaque arbre Ω. T est le nombre de feuilles, w les scores des feuilles, γ et λ les hyperparamètres de régularisation. Le paramètre scale_pos_weight compense le déséquilibre des classes sans SMOTE.'
        },
        {
          name: 'Kolmogorov-Smirnov — Détection de data drift',
          latex: 'D_{n,m} = \\sup_{x \\in \\mathbb{R}} \\left|F_{\\text{train}}(x) - F_{\\text{new}}(x)\\right|',
          description: 'Statistique non-paramétrique mesurant la divergence maximale entre deux distributions cumulatives empiriques. Si p-value < 0.05 sur une feature, le drift est significatif et un réentraînement est recommandé. L\'avantage : aucune hypothèse sur la forme des distributions.'
        }
      ]
    },
    code: {
      highlights: [
        {
          title: 'Pipeline d\'entraînement avec split stratifié et SMOTE',
          language: 'python',
          snippet: `from imblearn.over_sampling import SMOTE
from sklearn.model_selection import StratifiedShuffleSplit
from sklearn.ensemble import RandomForestClassifier
from xgboost import XGBClassifier

def build_pipeline(X, y):
    # Split stratifié 70/15/15 : préserve le taux de fraude dans chaque partition
    sss = StratifiedShuffleSplit(n_splits=1, test_size=0.30, random_state=42)
    for train_idx, temp_idx in sss.split(X, y):
        X_train, X_temp = X.iloc[train_idx], X.iloc[temp_idx]
        y_train, y_temp = y.iloc[train_idx], y.iloc[temp_idx]

    # SMOTE uniquement sur le training set — jamais sur val/test
    smote = SMOTE(random_state=42, k_neighbors=5)
    X_train_res, y_train_res = smote.fit_resample(X_train, y_train)

    models = {
        'random_forest': RandomForestClassifier(
            n_estimators=100, class_weight='balanced', random_state=42
        ),
        'xgboost': XGBClassifier(
            scale_pos_weight=len(y[y==0]) / len(y[y==1]),
            eval_metric='aucpr'
        )
    }
    return X_train_res, y_train_res, X_temp, y_temp, models`,
          description: 'Le split stratifié garantit que les 0.17 % de fraudes sont représentées dans chaque partition. SMOTE n\'est appliqué qu\'au training set — contaminer le set de validation fausserait l\'évaluation et produirait des métriques artificiellement optimistes.'
        },
        {
          title: 'Détection de drift par test de Kolmogorov-Smirnov',
          language: 'python',
          snippet: `from scipy.stats import ks_2samp
import pandas as pd

def detect_drift(
    X_ref: pd.DataFrame,
    X_new: pd.DataFrame,
    threshold: float = 0.05
) -> dict:
    results = {'drift_detected': False, 'drifted_features': []}

    for col in X_ref.columns:
        stat, p_value = ks_2samp(
            X_ref[col].dropna(),
            X_new[col].dropna()
        )
        if p_value < threshold:
            results['drift_detected'] = True
            results['drifted_features'].append({
                'feature': col,
                'ks_statistic': round(stat, 4),
                'p_value': round(p_value, 6),
                'severity': 'high' if p_value < 0.001 else 'medium'
            })

    return results`,
          description: 'Pour chaque feature, le KS-test compare la distribution d\'entraînement à celle des nouvelles données. L\'approche est non-paramétrique : aucune hypothèse de normalité. La sévérité distingue les drifts modérés (p < 0.05) des drifts critiques (p < 0.001) qui nécessitent un réentraînement immédiat.'
        }
      ]
    },
    transmission: {
      liveUrl: 'https://credit-card-fraud-ou77.onrender.com',
      liveDescription: `Interface web complète déployée sur Render. Permet d'importer un dataset CSV, de visualiser l'analyse exploratoire des données, de lancer l'entraînement en live avec comparaison des 3 modèles, d'évaluer les performances sur de nouvelles données, et d'analyser le drift feature par feature avec recommandation de réentraînement.`
    }
  },
  {
    id: 'project-3',
    title: 'Agent IA',
    shortDescription: 'Un agent conversationnel intelligent capable de raisonner, chercher et agir de manière autonome',
    fullDescription: `Et si une IA ne se contentait plus de répondre, mais apprenait à agir ?

C'est la question qui est à l'origine de ce projet. Là où un simple chatbot récite ce qu'il a mémorisé, un agent raisonne : il décompose un problème, choisit les bons outils, interroge des sources externes, puis synthétise une réponse ancrée dans le réel.

L'idée centrale est simple mais puissante — combiner la capacité de compréhension d'un grand modèle de langage avec la précision d'une recherche documentaire ciblée. Le résultat : un assistant qui ne hallucine pas, qui cite ses sources, et qui s'adapte au contexte de chaque échange.

Ce projet explore l'architecture complète d'un agent IA moderne : une API backend construite avec FastAPI, un moteur RAG (Retrieval-Augmented Generation) orchestré par LangChain, une base vectorielle ChromaDB pour le stockage des embeddings, et une interface frontend pensée pour rendre l'expérience fluide et accessible.

L'objectif n'était pas de construire un énième chatbot générique, mais un outil à usage réel — capable d'ingérer des documents personnalisés, de les comprendre en profondeur, et de répondre avec précision aux questions qui comptent vraiment.`,
    image: '/images/projects/rag-system.svg',
    technologies: ['Python', 'LangChain', 'OpenAI', 'ChromaDB', 'FastAPI', 'React'],
    category: 'NLP',
    githubUrl: 'https://github.com/elafortune/personal_agent',
    liveUrl: 'https://personal-agent-wk8s.onrender.com',
    date: '2025-01',
    featured: true,
    outcomes: [
      'Agent capable de raisonner en plusieurs étapes avant de répondre',
      'Réponses contextuelles précises ancrées dans les documents fournis',
      'Réduction significative des hallucinations grâce au RAG',
      'Interface complète frontend + backend déployable'
    ],
    challenges: `Trouver le bon équilibre entre autonomie de l'agent et contrôle des réponses.
    Optimisation du chunking documentaire pour maximiser la pertinence des résultats.
    Gestion de la latence end-to-end pour une expérience utilisateur fluide.`,
    research: {
      interest: `Les grands modèles de langage excellent à générer du texte cohérent, mais ils hallucinent — c'est-à-dire qu'ils produisent des réponses confiantes mais factuellement fausses dès qu'ils opèrent hors de leur distribution d'entraînement. Le RAG (Retrieval-Augmented Generation) résout ce problème en ancrant la génération dans une base documentaire réelle : au lieu de "se souvenir", le modèle "cherche".

L'architecture combine deux composants fondamentaux : un moteur de recherche sémantique basé sur des embeddings vectoriels (ChromaDB), et un modèle de langage qui synthétise les passages récupérés en réponse cohérente. Le mécanisme d'attention du Transformer est ce qui permet au modèle de "lire" les documents récupérés et d'en extraire l'information pertinente à la question posée.`,
      formulas: [
        {
          name: 'Similarité cosinus — Retrieval sémantique',
          latex: '\\text{sim}(q, d) = \\cos(\\theta) = \\frac{q \\cdot d}{\\|q\\| \\cdot \\|d\\|}',
          description: 'Mesure la similarité entre l\'embedding de la requête q et celui d\'un chunk documentaire d dans l\'espace vectoriel de haute dimension. ChromaDB utilise cette métrique pour retourner les k chunks les plus sémantiquement proches de la requête — indépendamment de la longueur des textes.'
        },
        {
          name: 'Scaled Dot-Product Attention — Raisonnement contextuel du LLM',
          latex: '\\text{Attention}(Q, K, V) = \\text{softmax}\\!\\left(\\frac{QK^\\top}{\\sqrt{d_k}}\\right) V',
          description: 'Au cœur du Transformer : Q (requêtes), K (clés) et V (valeurs) sont des projections linéaires du contexte — ici, la question + les chunks récupérés. La division par √d_k stabilise les gradients en haute dimension. Le softmax produit une distribution d\'attention sur les tokens : le modèle "lit" les passages pertinents pour construire sa réponse.'
        }
      ]
    },
    code: {
      highlights: [
        {
          title: 'Construction du moteur RAG avec LangChain',
          language: 'python',
          snippet: `from langchain_community.vectorstores import Chroma
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain.chains import RetrievalQA
from langchain.prompts import PromptTemplate

PROMPT_TEMPLATE = """Réponds uniquement à partir du contexte fourni.
Si la réponse n'y figure pas, dis-le clairement.

Contexte : {context}
Question : {question}
Réponse :"""

def build_rag_chain(docs, model: str = "gpt-4o-mini"):
    embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
    vectorstore = Chroma.from_documents(
        docs, embeddings, persist_directory="./chroma_db"
    )
    retriever = vectorstore.as_retriever(
        search_type="similarity",
        search_kwargs={"k": 4}
    )
    prompt = PromptTemplate(
        template=PROMPT_TEMPLATE,
        input_variables=["context", "question"]
    )
    return RetrievalQA.from_chain_type(
        llm=ChatOpenAI(model=model, temperature=0),
        retriever=retriever,
        chain_type_kwargs={"prompt": prompt},
        return_source_documents=True
    )`,
          description: 'Le prompt template est volontairement restrictif : "réponds uniquement à partir du contexte". Cette contrainte dure élimine les hallucinations hors-document — si l\'information n\'est pas dans les chunks récupérés, l\'agent l\'admet plutôt que d\'inventer.'
        },
        {
          title: 'Chunking documentaire récursif',
          language: 'python',
          snippet: `from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import PyPDFLoader, TextLoader

def ingest_documents(file_path: str, chunk_size: int = 500, overlap: int = 50):
    loader = PyPDFLoader(file_path) if file_path.endswith('.pdf') else TextLoader(file_path)
    raw_docs = loader.load()

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=chunk_size,
        chunk_overlap=overlap,
        separators=["\\n\\n", "\\n", ". ", " ", ""]
    )
    chunks = splitter.split_documents(raw_docs)

    # Enrichissement des métadonnées pour la traçabilité
    for i, chunk in enumerate(chunks):
        chunk.metadata['chunk_id'] = i
        chunk.metadata['source_file'] = file_path

    return chunks`,
          description: 'Le RecursiveCharacterTextSplitter respecte la structure naturelle du texte (paragraphes > phrases > mots). Le overlap de 50 tokens assure la continuité sémantique entre chunks — une idée répartie sur deux chunks reste récupérable. Les métadonnées permettent de citer la source exacte dans la réponse.'
        }
      ]
    },
    transmission: {
      liveUrl: 'https://personal-agent-wk8s.onrender.com',
      liveDescription: `Interface conversationnelle déployée sur Render. Permet d'importer des documents PDF ou texte, de les ingérer dans la base vectorielle ChromaDB, puis de poser des questions en langage naturel. L'agent répond en citant les passages source utilisés pour construire sa réponse — traçabilité complète, zéro hallucination hors-document.`
    }
  }
];

export const getFeaturedProjects = () => projects.filter(p => p.featured);

export const getProjectsByCategory = (category) => {
  if (!category || category === 'all') return projects;
  return projects.filter(p => p.category === category);
};

export const getUniqueCategories = () => [...new Set(projects.map(p => p.category))];

export const getProjectById = (id) => projects.find(p => p.id === id) || null;

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
      interest: `La fraude bancaire est un domaine dans lequel les méthodes et les métriques classiques de machine learning ne suffisent pas. En effet le premier problème provient des données : les datasets sont disproportionnés car le nombre de cas de fraudes est négligeable par rapport au nombre de transactions valides. Avec 0.17 % de transactions frauduleuses sur 284 807 enregistrements, un modèle naïf va naturellement prédire avec 99.83 % d'accuracy à cause de la répartition du dataset actuelle. Cependant cela ne veut pas dire qu'il est capable de détecter correctement les fraudes les rares fois où elles se passent. L'idée de ce projet est de pouvoir trouver une méthode pour régler le déséquilibre du dataset et avoir une métrique claire permettant d'évaluer le modèle sur la détection de fraude.
Métrique : l'objectif n'est pas l'accuracy, c'est le recall sur la classe minoritaire car elle met en avant la part de faux négatifs. Dans le contexte de détection de fraude manquer une fraude (un faux négatif) coûte bien plus cher qu'un faux positif. Cette asymétrie de coût nous pousse à choisir une métrique d'évaluation qui prend cela en compte, cela va aussi influencer notre choix de modèle. Et comme les patterns de fraude évoluent dans le temps, un mécanisme de détection de data drift est intégré pour alerter quand le modèle commence à devenir obsolète.`,
      formulas: [
        {
          name: 'SMOTE — Oversampling synthétique de la classe minoritaire',
          latex: 'x_{\\text{new}} = x_i + \\lambda \\cdot (\\tilde{x}_{nn} - x_i), \\quad \\lambda \\sim \\mathcal{U}[0,1]',
          description: `L'algorithme SMOTE (Synthetic Minority Over-sampling Technique) est une méthode classique pour résoudre le problème de déséquilibre de classes dans un dataset. Contrairement à la simple duplication des exemples existants — qui ne ferait qu'amplifier le surapprentissage — SMOTE génère de nouveaux exemples synthétiques inspirés des exemples minoritaires existants.

Éléments de la formule : $x_{\\text{new}}$ est le nouveau point synthétique généré, sous forme d'un vecteur de caractéristiques ; $x_i$ est un point de la classe minoritaire tiré aléatoirement dans le dataset ; $\\tilde{x}_{nn}$ est l'un des $k$ plus proches voisins de $x_i$, également de la classe minoritaire ; $\\lambda$ est un scalaire aléatoire uniforme dans $[0, 1]$.

Génération du point synthétique : on sélectionne $x_i$, puis on calcule ses $k$ plus proches voisins par distance euclidienne et on en choisit un aléatoirement, $\\tilde{x}_{nn}$. Le vecteur $(\\tilde{x}_{nn} - x_i)$ pointe de $x_i$ vers $\\tilde{x}_{nn}$. Multiplié par $\\lambda \\in [0, 1]$, il positionne $x_{\\text{new}}$ sur le segment entre ces deux points : si $\\lambda = 0$, on retombe sur $x_i$ ; si $\\lambda = 1$, on obtient $\\tilde{x}_{nn}$ ; pour toute valeur intermédiaire, $x_{\\text{new}}$ est un nouveau point synthétique plausible situé entre un exemple de fraude existant et l'un de ses plus proches voisins.`
        },
        {
          name: 'PR-AUC — Métrique de référence sur classes déséquilibrées',
          latex: '\\text{PR-AUC} = \\int_0^1 \\text{Precision}(R)\\,dR \\approx \\sum_{i} P_i \\cdot \\Delta R_i',
          description: `Pour chaque transaction, le modèle produit une probabilité de fraude comprise entre $0$ et $1$. Cette probabilité est comparée à un seuil de décision $\\theta$ : si $P(\\text{fraude}) > \\theta$, la transaction est classée frauduleuse. Par défaut, $\\theta = 0.5$.

Pour tracer la courbe, on fait varier $\\theta$ continûment de $1$ à $0$. À chaque valeur de seuil, on recalcule la $\\text{Précision}$ (parmi les transactions prédites frauduleuses, quelle fraction l'est vraiment ?) et le $\\text{Recall}$ (parmi toutes les fraudes réelles, quelle fraction a été détectée ?). Chaque paire $(\\text{Recall}, \\text{Précision})$ forme un point de la courbe PR. En faisant glisser $\\theta$ sur tout l'intervalle $[0, 1]$, on obtient l'ensemble des points qui composent la courbe — et l'intégrale $\\sum_i P_i \\cdot \\Delta R_i$ donne l'aire sous cette courbe, la PR-AUC.`
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
  },
  {
    id: 'realtime-video-analysis',
    title: 'Pipeline Vidéo Temps Réel — Détection & Tracking Aérien',
    shortDescription: 'Détection et tracking multi-objets sur flux vidéo aérien : YOLOv10 fine-tuné, quantifié en INT8 avec TensorRT, exécuté par un moteur C++20 zero-copy à plus de 1200 FPS.',
    fullDescription: `Un système de vision par ordinateur temps réel n'est jamais limité par la précision du modèle — il est limité par la chaîne complète qui le fait tourner. Ce projet part de ce constat pour construire un pipeline de bout en bout : de l'entraînement d'un détecteur jusqu'à son exécution en C++ à plus de 1200 images par seconde sur GPU.

Trois étapes, chacune motivée par la précédente. D'abord, le fine-tuning d'un YOLOv10 sur VisDrone (détection aérienne dense — piétons, véhicules, vus depuis un drone), choisi précisément parce qu'il est NMS-free : sa sortie ne nécessite aucun post-traitement à latence variable, un détail d'architecture qui devient déterminant pour un système temps réel. Ensuite, la compression du modèle en INT8 via TensorRT, avec une perte de précision mesurée (pas supposée) et un rapport de profiling comparant trois runtimes. Enfin, un moteur d'inférence C++20 qui applique un principe simple mais exigeant : garder les données sur GPU du décodage vidéo à l'inférence, sans jamais repasser par la RAM CPU — le "zero-copy".

Le résultat : un pipeline qui décode la vidéo par le décodeur matériel NVDEC, prétraite et infère entièrement sur GPU, puis track les objets détectés (ByteTrack) — le tout mesuré, profilé avec Nsight Systems, et documenté du premier échec de compilation au dernier benchmark.`,
    image: '/images/projects/photo_results/visdrone-detections-1.jpg',
    technologies: ['C++20', 'CUDA', 'TensorRT', 'OpenCV (CUDA)', 'PyTorch', 'Ultralytics YOLOv10', 'ONNX', 'Docker', 'CMake', 'Nsight Systems'],
    category: 'Computer Vision',
    githubUrl: 'https://github.com/elafortune/real_time_video_analysis',
    liveUrl: null,
    date: '2026-09',
    featured: true,
    outcomes: [
      'Moteur TensorRT INT8 6,0× plus rapide que PyTorch natif et 4,7× plus rapide qu\'ONNXRuntime (1239 FPS vs 205/264 FPS, inférence pure)',
      'Latence P99 mesurée à 0,81 ms — objectif du cahier des charges (≥60 FPS) dépassé d\'un facteur 20',
      'Pipeline C++20 zero-copy validé de bout en bout : NVDEC → GPU → TensorRT → tracking, sans copie CPU intermédiaire',
      'Perte de précision INT8 quantifiée (mAP50-95 : 0,296 → 0,259, soit -12,5 %) plutôt que supposée, avec leviers de correction identifiés (QAT, calibration entropy)',
      'Preuve d\'exécution INT8 réelle via profiling Nsight Systems (kernels Tensor Core GEMM INT8 identifiés, pas une exécution FP32 déguisée)'
    ],
    challenges: `Les headers NVCUVID open-source (nv-codec-headers) ne fournissaient que des typedefs de pointeurs de fonction, pas les déclarations directement liables qu'OpenCV attend — il a fallu identifier la vraie source (NVIDIA Video Codec SDK) et la différence entre les deux approches.
    Le fichier .engine généré par Ultralytics n'est pas un plan TensorRT brut mais un conteneur avec un en-tête JSON de métadonnées — un bug de désérialisation a nécessité d'inspecter les octets bruts du fichier pour comprendre le vrai format.
    Le Container Disk éphémère du pod cloud a effacé l'environnement C++ entier (CUDA Toolkit, TensorRT, OpenCV compilé) à chaque redémarrage — la compilation d'OpenCV avec support CUDA/NVDEC prend 30 à 60 minutes à elle seule.`,
    research: {
      objective: `L'objectif n'est pas seulement d'entraîner un détecteur précis, mais de construire un système qui tient une cadence temps réel (≥60 FPS) de bout en bout sur un flux vidéo aérien — de l'image brute jusqu'aux objets suivis. Un modèle précis mais lent, ou rapide mais isolé dans un environnement Python mal optimisé, ne répond à aucun des deux.

Le plan d'attaque suit un ordre volontaire, où chaque étape conditionne la suivante plutôt que d'être indépendante : (1) fine-tuner un détecteur sur des données aériennes réelles — un modèle générique entraîné sur COCO (photos au sol) ne reconnaît pas correctement des objets vus du ciel ; (2) compresser ce détecteur en INT8 via TensorRT — un modèle précis mais lent ne tient aucun cahier des charges temps réel, quelle que soit la qualité du moteur qui l'exécute ; (3) construire un moteur d'inférence C++ zero-copy autour de ce modèle compressé — un modèle rapide isolé ne sert à rien si le reste de la chaîne (décodage vidéo, prétraitement, tracking) réintroduit la latence qu'on vient d'éliminer.

Suivre cet ordre plutôt que, par exemple, écrire le moteur C++ en premier, évite de construire une infrastructure entière autour d'un modèle qui n'est pas encore le bon — et permet de mesurer l'impact réel de chaque étape indépendamment (voir Résultats).`,
      subsections: [
        {
          title: 'Fine-tuning YOLOv10 sur VisDrone',
          content: `Le choix du détecteur n'est pas neutre : YOLOv10 a été retenu spécifiquement parce qu'il est NMS-free — contrairement aux versions précédentes de YOLO, sa sortie ne nécessite aucun post-traitement de suppression de doublons (Non-Max Suppression). Le NMS classique est une étape séquentielle dont le temps d'exécution dépend du nombre de boîtes candidates détectées : sur une scène aérienne dense (VisDrone contient jusqu'à 900 objets par image), ce temps devient à la fois élevé et surtout imprévisible d'une frame à l'autre — exactement le genre de variance qu'un système temps réel doit éliminer plutôt que subir.

Le modèle est fine-tuné sur VisDrone (détection aérienne : piétons, véhicules, deux-roues) plutôt qu'utilisé tel quel sur COCO, backbone entièrement dégelé sur 50 epochs — le domaine aérien (vues du ciel, objets minuscules) diffère trop de COCO (photos au sol) pour se contenter d'entraîner la seule tête de classification. La résolution d'entrée est relevée à 960×960 (au lieu de 640 par défaut) pour préserver la résolution des petits objets vus du ciel.`
        },
        {
          title: 'Export & quantification INT8 (PTQ)',
          content: `Une fois le détecteur entraîné, l'objectif change : le rendre rapide sans repartir de zéro. Deux familles de quantification existent — le PTQ (Post-Training Quantization), qui calibre un modèle déjà entraîné sur un petit jeu de données représentatif, et le QAT (Quantization-Aware Training), qui réentraîne le modèle en simulant le bruit de quantification pendant l'entraînement. Le PTQ a été choisi ici : il ne coûte qu'une passe de calibration de quelques minutes, contre un ré-entraînement complet pour le QAT — un compromis raisonnable tant que la perte de précision reste mesurée et acceptable, ce qui a été vérifié plutôt que supposé.

La calibration est effectuée sur 512 images du dataset d'entraînement VisDrone lui-même, pas des images génériques, pour que les plages de valeurs calibrées reflètent la distribution réelle rencontrée en inférence.`,
          formulas: [
            {
              name: 'Quantification INT8 — de la valeur flottante à l\'entier 8 bits',
              latex: 'x_{\\text{int8}} = \\text{round}\\!\\left(\\frac{x_{\\text{float}}}{\\text{scale}}\\right), \\quad \\text{scale} = \\frac{\\max(|x|)}{127}',
              description: `Le passage en INT8 remplace chaque poids/activation FP32 par un entier 8 bits (256 valeurs possibles) — un gain de vitesse acquis dès qu'on quantifie, indépendamment de la valeur du $\\text{scale}$ choisi. Ce dernier n'affecte que la précision, avec deux modes d'échec symétriques : un $\\text{scale}$ trop grand écrase la résolution (des valeurs distinctes finissent arrondies au même entier), un $\\text{scale}$ trop petit sature (clippe) les valeurs extrêmes.`
            }
          ]
        },
        {
          title: 'Moteur d\'inférence C++20 — zero-copy',
          content: `Le moteur C++ applique un principe simple : garder les données sur GPU entre le décodage vidéo et l'inférence, pour éviter les copies mémoire CPU↔GPU (bus PCIe) — une source de latence lente et surtout variable, le même problème que le NMS qu'on cherche justement à éviter à l'étape 1. Concrètement : décodage matériel NVDEC directement en VRAM, prétraitement (letterbox + normalisation) sur GPU via OpenCV compilé avec CUDA, puis inférence TensorRT sur le même flux d'exécution (cudaStream_t) pour garantir l'ordre des opérations sans synchronisation bloquante.`
        },
        {
          title: 'Tracking multi-objets — filtre de Kalman et association',
          content: `Détecter un objet frame par frame ne suffit pas : sans mécanisme de suivi, chaque détection serait un objet "nouveau", sans continuité d'identité. Le tracker (ByteTrack simplifié) résout ça avec deux mécanismes distincts qui travaillent ensemble : un filtre de Kalman pour prédire où chaque objet suivi devrait se trouver, et un algorithme d'association pour relier ces prédictions aux nouvelles détections.

Le filtre de Kalman maintient, pour chaque piste, un état à 8 dimensions : position et taille de la boîte (cx, cy, w, h), plus leur vitesse instantanée (vcx, vcy, vw, vh) — un modèle à vitesse constante. À chaque frame, deux étapes se succèdent. La prédiction extrapole l'état précédent en utilisant la vitesse estimée, avant même de savoir si une détection va matcher cette frame — c'est ce qui permet de continuer à suivre un objet brièvement masqué. La correction ne s'exécute que si une détection est associée à la piste : elle fusionne la prédiction avec la mesure réelle, pondérée par le gain de Kalman (qui reflète la confiance relative accordée à la prédiction vs à la mesure, recalculée à chaque frame). Résultat : une position lissée, moins sensible au bruit de détection frame par frame qu'une simple copie de la dernière boîte détectée.

L'association doit ensuite décider quelle détection correspond à quelle piste, à partir des chevauchements géométriques (IoU) entre positions prédites et détections réelles. Le problème formel — trouver l'affectation qui maximise l'IoU total, un-à-un — est un problème d'affectation classique, normalement résolu de façon exacte et optimale par l'algorithme hongrois (Kuhn-Munkres, complexité O(n³)) : il considère toutes les paires simultanément et garantit la meilleure solution globale. Notre implémentation C++ utilise en pratique une approximation gloutonne plus simple à coder (pas de dépendance à une bibliothèque d'affectation linéaire) : trier toutes les paires (piste, détection) valides par IoU décroissant, puis assigner greedily en retirant piste et détection au fur et à mesure. Ce choix, documenté comme un compromis délibéré, n'est pas garanti optimal globalement — une paire localement excellente peut bloquer une meilleure affectation d'ensemble — mais reste efficace à la densité d'objets observée sur VisDrone.

Cette association se fait en deux passes : d'abord les détections à haute confiance contre toutes les pistes, puis les détections à basse confiance mais uniquement pour récupérer une piste déjà établie — jamais pour en créer une nouvelle, ce qui évite l'accumulation de faux positifs persistants tout en récupérant les objets momentanément flous ou partiellement occlus.`,
          formulas: [
            {
              name: 'Filtre de Kalman — prédiction et correction',
              latex: '\\hat{x}_{k|k-1} = F\\hat{x}_{k-1|k-1}, \\qquad \\hat{x}_{k|k} = \\hat{x}_{k|k-1} + K_k\\left(z_k - H\\hat{x}_{k|k-1}\\right)',
              description: `$\\hat{x}$ est le vecteur d'état $(c_x, c_y, w, h, v_{c_x}, v_{c_y}, v_w, v_h)$, $F$ la matrice de transition (modèle à vitesse constante : position $\\mathrel{+}=$ vitesse $\\times\\, dt$), et $z_k$ la mesure (la détection appariée). $K_k$, le gain de Kalman, pondère la confiance accordée à la prédiction par rapport à la mesure — il est recalculé à chaque frame à partir des covariances de bruit de processus et de mesure. La prédiction s'exécute pour toutes les pistes à chaque frame ; la correction seulement pour celles qui trouvent une détection associée.`
            },
            {
              name: 'Problème d\'affectation — IoU et algorithme hongrois',
              latex: '\\min_{x} \\sum_{i,j} c_{ij}\\, x_{ij} \\quad \\text{s.c.} \\sum_j x_{ij} \\le 1,\\ \\sum_i x_{ij} \\le 1,\\ c_{ij} = 1 - \\text{IoU}(i, j)',
              description: `Formulation exacte du problème résolu par l'algorithme hongrois : trouver l'affectation un-à-un piste↔détection qui minimise le coût total (donc maximise l'IoU total), sous contrainte qu'une piste et une détection ne servent chacune qu'une seule fois. Le vrai ByteTrack le résout de façon optimale via Kuhn-Munkres ; notre implémentation C++ utilise une approximation gloutonne (tri par IoU décroissant, assignation itérative) — plus simple, non garantie optimale globalement, mais suffisante à la densité observée.`
            }
          ]
        }
      ]
    },
    code: {
      highlights: [
        {
          title: 'Fine-tuning YOLOv10 sur VisDrone (Python / Ultralytics)',
          language: 'python',
          snippet: `from ultralytics import YOLO

model = YOLO("yolov10s.pt")  # poids pré-entraînés COCO — backbone/neck réutilisés
results = model.train(
    data="VisDrone.yaml",
    epochs=50,
    imgsz=960,      # résolution relevée pour préserver les petits objets aériens
    batch=16,
    device=0,
    # backbone entièrement dégelé : le domaine aérien diffère trop de COCO
    # pour se contenter d'entraîner la seule tête de classification
)`,
          description: 'Seule la tête de classification finale est réinitialisée (incompatibilité de shape avec le nombre de classes VisDrone) — backbone et neck repartent des poids COCO. Le backbone reste dégelé car le domaine aérien (vues du ciel, objets minuscules) diffère trop de COCO pour un fine-tuning partiel.'
        },
        {
          title: 'Moteur d\'inférence C++ — chaîne zero-copy decode→infer',
          language: 'cpp',
          snippet: `cv::cuda::Stream cvStream;
cudaStream_t stream = cv::cuda::StreamAccessor::getStream(cvStream);

while (reader->nextFrame(rawFrame)) {          // NVDEC : décodage direct en VRAM
    cv::cuda::GpuMat bgrFrame;
    cv::cuda::cvtColor(rawFrame, bgrFrame, cv::COLOR_BGRA2BGR, 0, cvStream);

    LetterboxInfo lb{};
    cv::cuda::GpuMat inputTensor = preproc.process(bgrFrame, cvStream, lb);

    // pointeur mémoire GPU direct — aucun .download()/.upload() ici
    engine.infer(inputTensor.cudaPtr(), outputDevicePtr, stream);
}`,
          description: 'Décodage, conversion couleur, prétraitement et inférence partagent le même cudaStream_t : CUDA garantit alors un ordre d\'exécution séquentiel sans synchronisation bloquante — le prétraitement finit forcément avant que l\'inférence ne lise la même zone mémoire.'
        },
        {
          title: 'Filtre de Kalman — état, prédiction et correction',
          language: 'cpp',
          snippet: `// Etat : [cx, cy, w, h, vcx, vcy, vw, vh] -- modele a vitesse constante
cv::KalmanFilter ByteTracker::makeKalman(const Detection& d) {
    cv::KalmanFilter kf(8, 4, 0, CV_32F);
    cv::setIdentity(kf.transitionMatrix);
    for (int i = 0; i < 4; ++i)
        kf.transitionMatrix.at<float>(i, i + 4) = 1.f;  // position += vitesse * dt

    kf.measurementMatrix = cv::Mat::zeros(4, 8, CV_32F);
    for (int i = 0; i < 4; ++i) kf.measurementMatrix.at<float>(i, i) = 1.f;

    cv::setIdentity(kf.processNoiseCov, cv::Scalar::all(1e-2));
    cv::setIdentity(kf.measurementNoiseCov, cv::Scalar::all(1e-1));
    return kf;
}

// A chaque frame : predire AVANT de savoir si une detection va matcher
for (auto& t : tracks_) t.kf.predict();

// Correction uniquement si une detection est associee a la piste
tracks_[trackI].kf.correct(measurement);`,
          description: 'La prédiction tourne pour toutes les pistes à chaque frame, indépendamment du résultat de l\'association — c\'est elle qui permet de garder une estimation de position même sans détection matchée (objet momentanément masqué). La correction ne s\'applique qu\'aux pistes effectivement associées, et fusionne prédiction + mesure pondérées par le gain de Kalman (calculé en interne par OpenCV à partir de processNoiseCov/measurementNoiseCov).'
        },
        {
          title: 'Association gloutonne — approximation de l\'algorithme hongrois',
          language: 'cpp',
          snippet: `// Passe 1 : détections haute confiance vs toutes les pistes
greedyMatch(allTrackIdx, highDets, matches1, unmatchedTracks1, unmatchedHighDets);

// Passe 2 : détections basse confiance -- uniquement pour RÉCUPÉRER
// des pistes déjà établies, jamais pour en créer de nouvelles
greedyMatch(unmatchedTracks1, lowDets, matches2, unmatchedTracks2, unmatchedLowDets);

// Nouvelles pistes : uniquement à partir de détections haute confiance
for (int detI : unmatchedHighDets) {
    Track t;
    t.id = nextId_++;
    t.kf = makeKalman(highDets[detI]);
    tracks_.push_back(std::move(t));
}`,
          description: 'greedyMatch trie les paires (piste, détection) par IoU décroissant et assigne itérativement — une approximation de l\'algorithme hongrois, plus simple qu\'un vrai solveur d\'affectation linéaire mais non garantie optimale globalement. Par ailleurs : une piste déjà établie porte un a priori (plusieurs détections haute confiance passées), donc une détection basse confiance qui lui correspond est probablement un vrai objet temporairement flou — alors qu\'une détection basse confiance isolée n\'a aucune preuve accumulée, d\'où son exclusion de la création de nouvelles pistes.'
        }
      ]
    },
    transmission: {
      liveUrl: null,
      visualDescription: `Les deux premières images montrent le pipeline complet en action sur de vraies scènes aériennes VisDrone (piétons, véhicules, deux-roues détectés et suivis avec un identifiant de piste stable). La densité de détections correctes sur des scènes urbaines chargées est la validation la plus directe que le fine-tuning et le prétraitement sont cohérents de bout en bout.

Les deux images suivantes forment le rapport de profiling comparatif complet : PyTorch natif, ONNXRuntime et TensorRT INT8, mesurés avec la même méthodologie (inférence pure, 200 itérations, warm-up inclus) pour une comparaison honnête, puis le détail chiffré par moteur (FPS, latence moyenne et P99, VRAM). Le gain de 6× n'est pas qu'un chiffre — le profiling Nsight Systems sous-jacent (dernière image) confirme que l'accélération vient bien de kernels Tensor Core INT8 réels, pas d'un artefact de mesure.`,
      images: [
        {
          src: '/images/projects/photo_results/visdrone-detections-1.jpg',
          caption: 'Détection et tracking sur scène aérienne dense (VisDrone) — véhicules, piétons et deux-roues, chacun avec un ID de piste stable.'
        },
        {
          src: '/images/projects/photo_results/visdrone-detections-2.jpg',
          caption: 'Même pipeline sur une scène urbaine plus chargée — la robustesse tient malgré la densité d\'objets et les occlusions partielles.'
        },
        {
          src: '/images/projects/photo_results/profiling-fps-latence.jpg',
          caption: 'Comparaison PyTorch / ONNXRuntime / TensorRT INT8 — débit et latence P99, mesurés avec une méthodologie identique sur les trois moteurs.'
        },
        {
          src: '/images/projects/photo_results/profiling-detail-nsight.jpg',
          caption: 'Détail chiffré par moteur (FPS, latence moyenne/P99, VRAM) et preuve d\'exécution INT8 réelle : le kernel GPU dominant est une convolution Tensor Core INT8 explicite, identifiée via Nsight Systems.'
        }
      ]
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

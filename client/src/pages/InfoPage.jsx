import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "./InfoPage.css";
import "../components/NavBar.css"

function InfoPage() {
  return (
    <>
    <NavBar />
    <main className="infopage_body">
      <img src="src/assets/images/brouette.webp" alt="brouette avec légumes"></img>
      <h1 className="infopage_title">Comment créer un potager ?</h1>
      <header className="infopage_intro">
        <article className="infopage_intro1">
          <p className="infopage_paragraphe">
            L’engouement actuel pour les potagers prend une telle ampleur que
            l’on parle autant d’agriculture urbaine que de jardin potager. En
            effet, les citadins ayant de plus en plus besoin de verdure et
            d’espaces végétalisés se tournent à présent vers les légumes,
            plantes aromatiques et petits fruits.
          </p>
          <img
            src="src/assets/images/potager_urbain.jpg"
            alt="potager urbain sur le toit d'un immeuble"
            className="infopage_intro1_image"
          />
        </article>
        <article className="infopage_intro2">
          <p className="infopage_paragraphe">
            Cette culture autrefois réservée à un lieu bien déterminé au sein
            d’un jardin s’émancipe dans toutes les configurations possibles.
            Même les principes de base ont évolué, les pratiques et les supports
            de culture également. L’envie de récolter ce que l’on va consommer
            reste cependant identique. Le potager devient ainsi un style de
            jardin très prisé. Il a plutôt tendance de nos jours à s’associer
            aux cultures d’ornement, les nouveaux jardiniers considérant que les
            légumes et les fruits font partie de l’ornement général des espaces
            extérieurs.
          </p>
          <img
            src="src/assets/images/carre-arbre.jpg"
            alt="potager dense"
            className="infopage_intro2_image"
          />
        </article>
      </header>
      <h2 className="infopage_subtitle">Qu’est-ce qu’un jardin potager ?</h2>
      <p className="infopage_paragraphe">
        C’est un espace réservé aux cultures nourricières. Il peut rassembler
        des légumes, des plantes aromatiques et des petits fruits comme les
        groseilles, le cassis, les framboises, les fraises et autres fruits
        poussant sur des arbustes ou des plantes vivaces. Les arbres fruitiers
        sont, eux, plantés dans un verger, ou dans une autre partie du jardin
        d’ornement. Mais les espaces clairement dédiés à ces catégories de
        plantations dans les anciens jardins ont évolué à notre époque pour
        finalement se confondre de plus en plus. Le changement de techniques de
        jardinage oriente aussi dans cette voie où verger et potager
        s’associent, pour cultiver de manière plus écologique et raisonnée selon
        les bases de l’agroécologie ou de la permaculture.
      </p>
      <img
        src="src/assets/images/jardin-permaculture.jpg"
        alt="potager en permaculture"
        className="infopage_image"
      />
      <h2 className="infopage_subtitle">Les types de jardin potager</h2>
      <h3 className="infopage_item">Le jardin potager traditionnel</h3>
      <p className="infopage_paragraphe">
        Dans ce style de jardin potager, les légumes sont répartis en rangs
        ordonnés, distants régulièrement pour laisser la place de passer entre
        les rangs, pour désherber, arroser ou récolter. Des « planches »
        rassemblent plusieurs rangs de légumes identiques. Elles sont séparées
        par des espaces plus importants qui peuvent accueillir des passe-pieds
        (lignes de planches, de briques ou de pavés sur lesquels le jardinier
        peut marcher sans tasser le sol ou écraser les plantations).
      </p>

      <h3 className="infopage_item">Le jardin potager en carrés</h3>
      <p className="infopage_paragraphe">
        Ce potager se construit au-dessus de la surface du sol. L’encadrement se
        fait avec toute sorte de matériaux (bois, métal, PVC,…). La hauteur,
        d’environ 40 à 60 cm, se choisit en fonction des matériaux disponibles
        et de ce que l’on souhaite créer. Ce jardin potager se réparti en carrés
        de petites superficies (entre 1,20 m et 1,50 m de côté environ) divisés
        en parcelles (ou compartiments) égales, le plus souvent carrées ou
        rectangulaires. Cette organisation a l’avantage d’optimiser la surface
        cultivée. Différentes sortes de légumes se côtoient dans ce système, ce
        qui multiplie la diversité végétale. L’entretien du potager en carrés
        est plus facile car les surfaces sont plus petites, et les légumes
        accessibles de tous les côtés.
      </p>
      <img
        src="src/assets/images/potager_en_carré.jpg"
        alt="Potager en carré"
        className="infopage_image"
      />

      <h3 className="infopage_item">Le jardin potager surélevé</h3>
      <p className="infopage_paragraphe">
        Ce potager reprend les formes du potager en carré (carrées ou
        rectangulaires) mais sa hauteur est plus importante. La plupart des
        structures proposées dans le commerce sont sur pied, à 80 ou 90 cm de
        hauteur. Mais il est aussi possible de construire un potager surélevé
        sans avoir d’espace libre en dessous. Dans ce cas, la hauteur de terre
        sera plus importante, ce qui peut privilégier certaines plantes comme
        les légumes racines. Au jardin, le potager surélevé est plébiscité pour
        minimiser les efforts physiques : en effet, il n’y a plus besoin de se
        baisser pour semer, planter ou récolter. Ce système est adopté dans les
        établissements de soins bénéficiant d’un jardin thérapeutique, car
        l’espace ouvert sous les structures permet aussi aux personnes en
        fauteuil roulant de venir jardiner.
      </p>
      <img
        src="src/assets/images/potager_sureleve.jpg"
        alt="Potager surélevé"
        className="infopage_image"
      />

      <h3 className="infopage_item">Les plates-bandes potagères</h3>
      <p className="infopage_paragraphe">
        Elles se conçoivent dans des espaces très divers, sur de petites
        superficies. Elles s’organisent en bandes de 50 cm à moins de 2 m, et
        conviennent ainsi à tous les jardiniers débutants souhaitant commencer
        un potager où se juxtaposeront légumes et plantes aromatiques.
      </p>

      <h3 className="infopage_item">Le potager-fruitier</h3>
      <p className="infopage_paragraphe">
        C’est l’une des formes de cultures préconisées en agro-écologie : les
        rangs d’arbres fruitiers séparés de plusieurs mètres ombragent en partie
        les rangs de légumes cultivés dans l’intervalle. Ils font obstacle au
        vent, créent un microclimat plus favorable à la culture qu’un terrain
        nu, produisent des feuilles qui, lorsqu’elles tombent et se décomposent
        au sol, régénèrent ce dernier.
      </p>
      <img
        src="src/assets/images/potager_fruitier.jpg"
        alt="Potager fruitier"
        className="infopage_image"
      />

      <h3 className="infopage_item">Le potager mandala</h3>
      <p className="infopage_paragraphe">
        Ce style de potager est conseillé en permaculture, afin de concentrer
        les plantations sur un minimum d’espace et selon un plan visant à
        profiter de toutes les expositions. La culture se fait sur des buttes
        dans lesquelles les espèces sont réparties selon leur type de
        croissance. Celles-ci sont donc associées de façon à ce que l’ensemble
        de la butte (sommet et côtés) soit utilisé. Les buttes permettent au sol
        de se réchauffer plus vite, à la pluie de s’infiltrer sans stagner, aux
        racines de profiter d’une terre meuble et plus aérée.
      </p>
      <img
        src="src/assets/images/potager_mandala.jpg"
        alt="Potager mandala"
        className="infopage_image"
      />

      <h3 className="infopage_item">Le potager en lasagnes</h3>
      <p className="infopage_paragraphe">
        Il utilise tous les déchets végétaux (tontes de gazon, feuilles mortes,
        broyat de coupes, épluchures de légumes) ainsi que des cartons sur
        lesquels il sera monté. Toutes ces matières sèches et humides sont
        superposées pour constituer un support de culture. L’idée n’est en
        réalité pas nouvelle : ce type de potager est ni plus ni moins qu’une
        culture sur un tas de compost, comme cela se pratique depuis longtemps
        pour les courges par exemple.
      </p>
      <img
        src="src/assets/images/potager_lasagnes.jpg"
        alt="Potager en lasagnes"
        className="infopage_image"
      />

      <h3 className="infopage_item">Le potager vertical</h3>
      <p className="infopage_paragraphe">
        Dans les jardins de ville (jardins urbains) exigus, la seule solution
        pour cultiver fleurs et légumes réside souvent dans l’utilisation des
        surfaces verticales. Les plantes poussent dans des poches de terre, mais
        la terre peut également être remplacée par un feutre qui se décompose au
        fil des mois. L’arrosage se fait par goutte-à-goutte et contient le plus
        souvent une solution nutritive, solution que l’on retrouve dans les
        structures de culture en hydroponie. Les fraisiers acceptent par exemple
        très bien ce système sur feutre et les salades s’adaptent bien à
        l’hydroponie.
      </p>
      <img
        src="src/assets/images/potager-vertical.jpg"
        alt="Potager vertical"
        className="infopage_image"
      />

      <h2 className="infopage_subtitle">Où créer un jardin potager ?</h2>
      <p className="infopage_paragraphe">
        Les possibilités sont nombreuses pour cette création de jardin potager :
        en pleine terre mais également sur terrasse et balcon, sur les toits,
        dans les cours, et dans toutes les configurations où l’on trouve un peu
        d’espace au soleil pour planter. La culture hors sol en hydroponie se
        développe également.
      </p>
      <p className="infopage_paragraphe">
        Les conditions premières à remplir sont un emplacement bien ensoleillé,
        des allées pratiques et assez larges pour circuler avec une brouette
        (sauf dans le cas de potagers de terrasse ou de balcon), un coin réservé
        au compost et un endroit pour installer aussi un abri de jardin (ou un
        cabanon).
      </p>
      <img
        src="src/assets/images/potager_tradi.jpg"
        alt="Potager traditionnel"
        className="infopage_image"
      />

      <p className="infopage_paragraphe">
        Dans les jardins urbains comme dans les jardins de campagne, la place du
        potager se négocie selon les envies de chacun et l’usage qu’il en fera
        au quotidien.
      </p>

      <p className="infopage_paragraphe">
        Le potager traditionnel et le potager-fruitier prennent de la place, ils
        seront logés au fond du jardin d’ornement ou sur l’un des côtés. Dans
        l’optique d’une organisation de potager en permaculture, le potager et
        le jardin d’ornement s’imbriquent l’un dans l’autre et ne forment plus
        qu’un seul espace cultivé. Les carrés potagers forment un dessin
        graphique susceptible de s’installer partout, même aux abords de la
        maison. Ils s’entourent le plus souvent de structures décoratives, en
        bois ou autres matériaux actuellement proposés. Les potagers surélevés
        offrent le même type de décor et de matériaux. Ils se montent autant sur
        une terrasse que sur un balcon. Les jardinières potagères (jardinières
        hautes, avec ou sans pieds) s’installent de la même façon sur les
        terrasses et balcons. Elles animent de plus en plus les balcons des
        immeubles de bureaux.
      </p>
      <img
        src="src/assets/images/potager_tradi2.jpg"
        alt="Potagers traditionnels"
        className="infopage_image"
      />
      <p className="infopage_paragraphe">
        Les plates-bandes potagères ont l’avantage de s’insérer partout où l’on
        a un peu de place pour ce type de culture. Elles peuvent ainsi se
        trouver le long d’un bâtiment ou d’une palissade, entre des
        plates-bandes de plantes aromatiques et condimentaires, dans les jardins
        partagés en petites superficies plus facilement gérables. Le potager
        vertical s’installe sur toutes les surfaces bien exposées, en vérifiant
        que les structures porteuses n’occasionnent pas de dégâts sur le support
        (humidité, poids). Le potager en lasagnes s’installe partout, du moment
        que l’on peut apporter facilement les matériaux servant à la
        constitution du support de culture.
      </p>

      <h2 className="infopage_subtitle">
        Quelles sont les contraintes d’un jardin potager ?
      </h2>
      <p className="infopage_paragraphe">
        En plus du respect des dates de semis ou de repiquage des jeunes plants,
        la récolte régulière des légumes, l’arrosage et la rotation des cultures
        sont les principales contraintes. Enfin, l’entretien du potager demande
        que le jardinier s’investisse dans la connaissance de ce qu’il cultive
        et des moyens à mettre en œuvre pour que cet entretien soit optimisé par
        des pratiques économes et respectueuses de l’environnement. Il est effet
        beaucoup plus sain de consommer des légumes et petits fruits ayant été
        cultivés écologiquement.
      </p>

      <p className="infopage_paragraphe">
        Les dates de semis changent en fonction de la région dans laquelle on se
        trouve. La mise en place des jeunes plants en pleine terre également.
        Certains légumes sont frileux et ne supportent pas le froid ou les
        dernières gelées survenant parfois en fin de printemps (mi-mai). Les
        périodes de semis et plantation conditionnent également les périodes de
        récolte.
      </p>

      <p className="infopage_paragraphe">
        L’arrosage du jardin potager est très important. C’est d’ailleurs, en
        général, le seul arrosage qui soit accepté par les arrêtés préfectoraux
        interdisant l’arrosage des jardins lors des périodes de sécheresse. Cet
        arrosage influence directement la production légumière, celle des
        aromatiques et des petits fruits. Mais avec la multiplication des
        périodes de sécheresse et la diminution des ressources en eau, la
        récupération de l’eau de pluie devient indispensable et des pratiques
        spécifiques permettent de moins arroser le potager :
      </p>

      <p className="infopage_paragraphe">
        ⇒ La couverture du sol par un paillis organique garde l’humidité plus
        longtemps en été, et protège le sol du soleil brûlant. Elle évite aussi
        la formation d’une croûte de surface préjudiciable à l’infiltration de
        l’eau d’arrosage et des pluies.
      </p>
      <p className="infopage_paragraphe">
        ⇒ L’association entre des légumes ayant des besoins différents en soleil
        et en eau offre une couverture du sol là aussi plus dense et
        protectrice.
      </p>
      <p className="infopage_paragraphe">
        ⇒ La pose d’un système d’arrosage par goutte-à-goutte économise l’eau
        car celle-ci est distribuée plus près des racines des plantes.
      </p>
      <p className="infopage_paragraphe">
        ⇒L’arrosage le soir ou tôt le matin limite l’évaporation de l’eau.
      </p>
      <p className="infopage_paragraphe">
        ⇒ La récolte régulière évite que les légumes ne grossissent de trop,
        perdent en saveur et deviennent durs. Laisser des légumes pourrir sur
        place peut ensuite attirer les maladies et parasites, ce qui est
        totalement contre-productif.
      </p>
      <p className="infopage_paragraphe">
        ⇒ Pendant les périodes de vacances, demandez à des voisins ou amis de
        venir récolter. En contrepartie, ils profiteront des légumes et petits
        fruits qu’ils emporteront.
      </p>
      <br></br>
      <p className="infopage_dernier_paragraphe">
        La rotation des cultures est le moyen le plus sûr pour éviter d’une part
        l’épuisement des sols, d’autre part la propagation des parasites et des
        maladies spécifiques à certains légumes, et qui peuvent rester en
        dormance dans le sol jusqu’au printemps suivant. Cette rotation suit un
        principe simple : changer l’endroit où l’on plante chaque culture chaque
        année, selon un ordre prenant en compte les besoins nutritifs des
        familles de légumes (exigeants, moyennement exigeants, peu exigeants).
        Seuls les légumes perpétuels restent en place d’une année sur l’autre,
        comme l’artichaut, l’oignon rocambole, l’asperge. Mais cette rotation
        des cultures ne peut s’appliquer dans le cas de cultures mixtes, par
        exemple dans les carrés potagers qui associent plusieurs types de
        légume. Dans ce cas, la rotation s’effectue d’un carré à l’autre.
        L’entretien du potager prend plus de temps que celui du jardin
        d’ornement, toutes proportions gardées car cela dépend de la superficie
        cultivée et des pratiques culturales mises en place.
      </p>
    </main>
    <Footer />
    </>
  );
}

export default InfoPage;

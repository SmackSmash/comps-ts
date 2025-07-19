import { createFileRoute } from '@tanstack/react-router';
import Modal from '../components/Modal';
import { useState } from 'react';
import Button from '../components/Button';
import { AnimatePresence } from 'motion/react';

const RouteComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <AnimatePresence>
        {showModal && (
          <Modal key='modal' onClose={handleClick}>
            <p>Some content for the modal</p>
            <Button style='danger' onClick={handleClick}>
              Close
            </Button>
          </Modal>
        )}
      </AnimatePresence>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac neque nec sem blandit
        vestibulum. Etiam eget justo semper neque malesuada mattis. Maecenas et nibh sed leo iaculis
        varius accumsan vitae metus. Sed sollicitudin porttitor libero, vel posuere mauris placerat
        sit amet. Etiam at dui id nunc dictum faucibus. Phasellus elementum nunc et massa lacinia
        euismod. Curabitur vitae augue placerat, consectetur lacus non, pellentesque metus.
        Vestibulum venenatis fringilla tortor id scelerisque. Pellentesque ac pulvinar dui, sed
        varius sapien. Vestibulum fermentum metus bibendum vestibulum elementum. Integer ac velit
        dictum, venenatis mi in, facilisis turpis. Nam vitae dignissim diam. Aliquam aliquet est
        sem, vel porta turpis interdum vitae. Ut hendrerit eros id nulla lobortis, a dapibus odio
        accumsan. Proin blandit turpis ut turpis interdum, id vehicula justo malesuada. Nullam ipsum
        nisl, feugiat et efficitur quis, imperdiet nec erat. Vestibulum euismod nisi sed est porta,
        id sollicitudin ante vulputate. Ut feugiat laoreet ornare. Nulla vitae aliquam dolor. Duis
        fringilla sem id dapibus elementum. Pellentesque metus neque, gravida ut mi id, gravida
        vehicula leo. Vivamus tortor metus, sagittis ut pellentesque in, vehicula a lectus. Quisque
        nec lectus neque. Fusce ac felis quis justo rutrum posuere iaculis in urna. Curabitur
        scelerisque, eros eu ullamcorper imperdiet, leo ante tristique elit, quis mollis augue magna
        nec augue. Phasellus non dui tincidunt, eleifend tortor sit amet, rhoncus ex. Etiam a sem in
        odio sagittis hendrerit. Sed sollicitudin purus ac erat interdum, ut vulputate ante
        molestie. Nunc bibendum diam condimentum purus scelerisque ultricies. Nunc cursus in nisi et
        fermentum. Sed eu tempor odio, non accumsan felis. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Duis ut venenatis leo. Praesent sed
        arcu eu arcu tempus viverra id sed tellus. Etiam nibh nisi, ullamcorper ut nulla blandit,
        laoreet posuere ex. Aliquam et facilisis lacus. Cras sit amet dolor diam. Aenean tristique
        lacinia venenatis. Praesent rhoncus mi vel maximus sodales. Morbi ornare nibh libero, eget
        elementum augue hendrerit sed. Duis consectetur, erat ac tincidunt bibendum, libero enim
        molestie lorem, sed fringilla est est vitae augue. Integer ut rhoncus lectus, at pulvinar
        diam. Donec dignissim et lorem et euismod. Mauris posuere posuere velit vel eleifend.
        Maecenas pharetra ante iaculis neque consequat condimentum. Sed dapibus tortor hendrerit
        congue tincidunt. Cras eget ipsum eget lacus pellentesque efficitur. Vivamus a sodales
        tellus. Sed vitae purus leo. Proin sit amet nisi mi. Aliquam volutpat ac purus sed ultrices.
        Morbi consectetur velit nec dolor aliquam scelerisque. Etiam vel turpis eu sem rhoncus
        euismod eu et magna. Morbi porta porta est, ac venenatis orci. Aliquam gravida odio quis
        tellus convallis, eget condimentum dolor congue. Proin et erat lobortis, eleifend dolor ut,
        semper sapien. Sed id cursus nisl. Ut diam diam, eleifend et sagittis in, laoreet id ligula.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Morbi eu nisi cursus, venenatis nunc nec, accumsan justo. Donec sed varius orci. Sed
        tincidunt ex sed fringilla malesuada. Fusce aliquet massa purus, ac malesuada urna ornare
        id. Quisque quis facilisis nibh. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Aliquam vitae vestibulum nisi. Vivamus tempus leo risus,
        tincidunt scelerisque enim convallis et. Cras nec dictum sapien. Vestibulum porttitor tempor
        ipsum in aliquam. Curabitur sit amet condimentum metus, at pretium mi. Mauris vel posuere
        massa. Nullam mattis mi quis metus vehicula semper. Nam blandit dapibus dui, eget tempus
        libero ornare vitae. Fusce ac ornare urna, ut feugiat eros. Vestibulum auctor arcu risus, in
        dapibus augue viverra vitae. Pellentesque quis sodales tellus, a congue felis. Morbi et
        risus eu justo vulputate egestas ac porta eros. Praesent vulputate, dui eu facilisis
        scelerisque, urna nulla faucibus sem, eget suscipit arcu velit nec arcu. Vivamus aliquam
        purus accumsan ante imperdiet tincidunt. Aliquam vitae diam tempus, tincidunt risus nec,
        viverra felis. Quisque ac metus augue. Praesent in ultricies urna. Sed eget sagittis dui.
        Vestibulum condimentum purus sit amet urna volutpat fermentum. Suspendisse egestas sagittis
        nisl. Nulla facilisi. Fusce mattis ornare lorem, sit amet iaculis velit. Suspendisse
        potenti. Nullam ultricies porttitor mauris. Donec blandit egestas purus. Morbi at
        pellentesque augue, vel luctus dolor. Aenean lacinia dui ullamcorper ultricies commodo. Nunc
        gravida lorem sapien. Pellentesque in ultrices ante, vitae condimentum felis. Duis nec
        varius ante. Praesent sollicitudin mauris neque. Fusce in augue ac eros feugiat congue ac
        non tortor. In hac habitasse platea dictumst. In eget metus aliquam, vulputate diam vitae,
        ornare dui. Curabitur tempus, eros ut tincidunt suscipit, elit enim sagittis nulla, a ornare
        est lacus eu neque. Donec pretium tincidunt ultrices. Morbi posuere sapien in nibh ornare,
        sed hendrerit massa faucibus. Aliquam semper erat non pellentesque lobortis. Nunc ac egestas
        erat. Integer in mi eu neque vulputate faucibus. In malesuada turpis id varius vestibulum.
        Nullam sed mi bibendum, tincidunt magna ut, dignissim dui. Aliquam porta ullamcorper urna,
        at semper sem. Phasellus commodo, mauris id semper bibendum, augue est blandit lacus, auctor
        efficitur est nibh in lectus. In sem orci, laoreet nec leo vitae, elementum mattis quam. Ut
        laoreet enim ac neque tincidunt, et cursus ante accumsan. Etiam viverra tincidunt felis, id
        pharetra arcu varius in. Cras at arcu dignissim, feugiat metus quis, scelerisque quam. Proin
        arcu ante, egestas sit amet enim id, maximus bibendum enim. Praesent sodales blandit diam,
        vel tincidunt tellus iaculis et. Quisque efficitur quis turpis at consectetur. Cras non
        accumsan purus, dictum laoreet velit. Donec laoreet arcu ut congue finibus. Morbi viverra
        dui nec nisi placerat, sit amet accumsan orci ullamcorper. Donec posuere vitae tellus ut
        lacinia. Nullam sed semper nisi, eget fringilla augue. Curabitur ut massa luctus, ultrices
        odio vitae, aliquet ipsum. Maecenas vulputate egestas nisi. Nulla at dolor suscipit nisi
        iaculis luctus. Nunc tincidunt nunc vel erat tincidunt, eu suscipit odio maximus. Praesent
        vitae risus dapibus, fermentum justo eu, dapibus leo. Suspendisse tristique lorem non metus
        elementum posuere. Vivamus imperdiet eleifend nibh. Nullam tincidunt accumsan est eget
        bibendum. Nullam id metus et tortor commodo commodo eu facilisis augue. Mauris vel elit est.
        Donec feugiat felis purus, a laoreet tortor condimentum nec. Duis cursus est erat, id
        scelerisque urna imperdiet eget. Nam nec ligula consectetur mauris accumsan consectetur nec
        sit amet tellus. Phasellus eu faucibus sapien. Nam dolor est, varius id mattis ac, tristique
        at urna. Cras finibus justo sed nibh euismod consequat. In hac habitasse platea dictumst.
        Integer eget sapien convallis, malesuada leo et, convallis nulla. Mauris elementum sapien in
        velit scelerisque, ut blandit lectus varius. Nunc ullamcorper consequat luctus. Quisque nec
        purus eleifend, suscipit dolor eu, commodo sapien. Praesent diam lorem, pretium sit amet
        ipsum a, congue porta felis. Integer pharetra quam vitae nunc mollis, a aliquet nibh
        blandit. Donec porta, erat id condimentum consequat, libero lacus ullamcorper est, ac
        finibus purus ligula eu nunc. Nunc at sollicitudin purus. Praesent maximus ut ante a
        porttitor. Sed nec urna erat. Praesent posuere semper leo vitae fringilla. Integer
        ullamcorper lacinia ante at condimentum. Proin suscipit placerat bibendum. Quisque vel
        libero augue. Nullam posuere, metus sed maximus posuere, magna sapien ultrices eros, non
        pretium erat est dignissim elit. Mauris pretium volutpat nisl, ut venenatis leo vulputate
        id. Aliquam erat volutpat. Nunc id felis quis magna elementum condimentum eget in lorem. Sed
        pharetra, mi a semper pretium, elit lacus imperdiet turpis, eu rutrum lectus mauris non
        nibh. Proin diam nibh, dapibus quis sollicitudin et, tincidunt vitae eros. Mauris tincidunt
        odio at ipsum volutpat tempus. Pellentesque vitae ante non tortor pharetra viverra a ac
        urna. Suspendisse in justo orci. Etiam interdum leo tempor, cursus purus et, pulvinar diam.
        Aenean non urna et justo convallis rhoncus in eu massa. Curabitur accumsan consequat sem ut
        gravida. Sed eget convallis diam, vitae condimentum mauris. Sed quis risus sit amet quam
        rhoncus iaculis. Cras at nisl sed risus porttitor lobortis ut vitae metus. Integer eget
        tellus leo. In luctus nisi nunc, ac dapibus metus accumsan a. Etiam ut sem ut urna mattis
        dapibus tempor id elit. Aenean auctor, enim et vestibulum scelerisque, sem ex ultricies
        nunc, quis vehicula nunc turpis at tortor. Pellentesque lobortis egestas nisl, ac tincidunt
        ex pellentesque at. Etiam dictum justo est, et consectetur augue facilisis vitae. Nam nisl
        erat, rutrum a erat fermentum, feugiat dictum neque. Etiam in elit vitae enim tempus
        sodales. Proin ac scelerisque metus, id dapibus dui. Praesent quis efficitur ex. Fusce
        vulputate leo nec interdum pulvinar. Mauris nec sem eleifend, semper lacus a, posuere nibh.
        Fusce eget est pharetra massa consequat consequat nec eu nunc. Maecenas vitae purus eu massa
        euismod consequat. Ut vel arcu vel elit posuere pulvinar ac sit amet ex. Suspendisse
        venenatis nunc et turpis fermentum, blandit tincidunt sapien efficitur. Nullam fermentum
        ante maximus, hendrerit lacus eget, congue ligula. Curabitur non ultrices orci. Sed at nisi
        at ex lobortis sagittis. In sit amet lectus elit. Aliquam erat volutpat. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Donec pretium faucibus sapien. Integer vitae mauris
        risus. Sed in vestibulum orci, quis posuere mauris. Cras cursus posuere laoreet. Cras in
        turpis vitae dolor porttitor venenatis ac ut ante. Suspendisse porttitor blandit est ut
        pharetra. Fusce vel turpis non neque tincidunt laoreet vel id elit. Phasellus vitae blandit
        risus, tempus molestie enim. Cras eu efficitur orci, eget eleifend ipsum. Sed vestibulum
        erat sollicitudin neque imperdiet rutrum. Quisque sed ipsum nunc. Donec mattis auctor magna
        sed efficitur. Curabitur pulvinar arcu enim, ut accumsan quam consectetur sed. Donec posuere
        auctor ante, sit amet vulputate urna sollicitudin nec. Aenean id luctus ex. Nunc id urna
        feugiat neque sodales tincidunt. Nulla varius dignissim ex, quis mollis lorem. Quisque
        hendrerit sed nisi sed hendrerit. Nunc at feugiat quam. Quisque lorem nunc, pulvinar non
        maximus sed, commodo vel leo. Pellentesque convallis ut diam vitae vestibulum. Nunc at
        feugiat urna, sit amet laoreet lectus. Nulla sit amet enim tincidunt eros auctor rhoncus non
        a urna. Integer id purus tincidunt, pellentesque magna eget, varius lectus. Pellentesque
        eget vehicula nibh, non efficitur metus. Aliquam venenatis lorem neque, a auctor turpis
        vulputate eleifend. Proin semper luctus ante, ut ornare lectus. Vivamus eleifend neque sed
        tortor accumsan, eget vestibulum ligula condimentum. Fusce ut dictum ligula, quis vulputate
        erat. Praesent vel libero dictum, consectetur purus eu, sollicitudin sem. Nam sed tristique
        mauris, in maximus nisl. Suspendisse ut augue at nisi fringilla lobortis eu eget ex. Nam ut
        odio imperdiet, interdum purus non, molestie metus. Aliquam placerat mauris rhoncus urna
        suscipit, ut maximus libero ullamcorper. Curabitur et lacinia ipsum, vitae porta mi. Nulla
        dolor leo, aliquam quis consequat sollicitudin, egestas vitae diam. Cras ultricies erat
        tincidunt justo laoreet, in hendrerit mauris aliquet. Nulla facilisi. Proin id ipsum semper,
        bibendum libero commodo, egestas leo. In hac habitasse platea dictumst. Cras et turpis non
        magna rutrum commodo id eu purus. Nam viverra justo fringilla semper mollis. Morbi tempor
        lobortis metus, id sollicitudin dolor consectetur et. Suspendisse quam nisi, tincidunt vel
        fermentum vitae, volutpat nec mi. Praesent urna metus, lacinia et rutrum a, dapibus quis
        quam. Aenean gravida rhoncus viverra. Mauris faucibus ut elit sed aliquet. Vivamus ut libero
        ornare, cursus enim at, bibendum libero. Suspendisse molestie velit vel molestie hendrerit.
        Nullam sit amet convallis est, a rhoncus urna. In at nisl ipsum. Aenean mollis luctus mi,
        imperdiet ullamcorper nibh ullamcorper eu. Morbi dictum magna est, sed laoreet sapien
        faucibus vel. Suspendisse maximus diam massa, porta egestas tellus placerat a. Vivamus et
        nisl cursus, cursus nisl non, mollis metus. Suspendisse vitae augue ac risus feugiat
        ultrices eu non justo. Duis finibus pellentesque arcu ut condimentum. Nunc eleifend, tortor
        quis mattis fringilla, odio arcu consequat massa, eget porttitor nulla tellus sed sem.
        Curabitur iaculis, turpis quis dignissim dignissim, dolor ante tincidunt enim, nec porta
        lacus sapien nec diam. Praesent in nibh mauris. Pellentesque euismod lectus id lectus
        pulvinar, vitae ornare sem imperdiet. Nam vel orci ligula. Nunc ornare massa ut euismod
        elementum. In tristique lacus sed velit viverra, quis egestas purus consequat. Nam cursus
        dapibus turpis vel condimentum. Nullam sit amet magna sed justo aliquam sollicitudin ac at
        nisi. Nulla vitae porttitor nisl. Integer eu leo ac dui eleifend imperdiet. Nam sit amet
        tellus ut orci tempus sagittis. Donec ut ex viverra, vestibulum tortor consectetur, posuere
        purus. Integer fringilla ipsum quis odio imperdiet, non pulvinar erat posuere. Vivamus a
        accumsan enim. Curabitur sed volutpat nunc. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Pellentesque auctor magna et ullamcorper viverra.
        Mauris ultricies turpis nisi, et facilisis justo auctor sed. Duis id tincidunt nunc. Donec
        vitae mi sed mi scelerisque sodales quis et velit. Vestibulum eu dapibus justo. Donec
        fermentum lobortis turpis, id cursus neque facilisis vehicula. Proin rutrum pretium turpis
        vel posuere. Praesent diam ante, dapibus non diam efficitur, fringilla congue ipsum.
        Suspendisse dapibus ante a libero egestas, in placerat tellus blandit. Proin risus sem,
        cursus non suscipit vel, ullamcorper in turpis. Duis viverra convallis eros at luctus.
        Integer vitae nisl dolor. Nam felis libero, aliquam ac purus at, sodales rhoncus odio.
        Aliquam placerat velit in nulla tincidunt mattis. Ut sit amet lacinia tortor. Sed gravida
        suscipit placerat. Aenean congue luctus egestas. Suspendisse nec sapien interdum, dictum
        augue at, mattis velit. Ut in tellus ut metus eleifend consequat id quis ligula. In ac
        mauris non ex hendrerit consequat in et libero. Pellentesque id ornare turpis. Aenean vitae
        maximus nunc. Nullam nec imperdiet urna. Morbi efficitur augue urna, id vestibulum justo
        facilisis id. Ut elementum neque justo, eget auctor elit congue vel. Vestibulum gravida
        rutrum magna, ut fermentum nisi euismod non. Quisque non ornare felis, et auctor justo. In
        hac habitasse platea dictumst. Nunc nec ante quis lorem venenatis vulputate nec eu est.
        Suspendisse pretium tortor sit amet massa scelerisque, non vestibulum urna efficitur.
        Pellentesque cursus eget quam eget finibus. Integer non libero varius, commodo diam sed,
        aliquet lacus. Quisque ex est, viverra vel dui ac, aliquam pulvinar elit. Proin molestie, ex
        eu volutpat congue, risus nisi lobortis dolor, tincidunt gravida libero ex a diam. Proin
        finibus lacus nec nisl aliquam lacinia. Nunc aliquet odio in quam posuere luctus. Nam eget
        elit imperdiet, condimentum sem eu, bibendum augue. Aenean lobortis nec nunc ut bibendum.
        Cras suscipit odio nec tellus mollis sagittis blandit ac lacus. Etiam commodo lorem sed
        massa pretium, ac luctus elit sodales. In a imperdiet felis, volutpat maximus orci. Maecenas
        laoreet imperdiet mi, quis volutpat ipsum blandit at. Nulla ultrices vestibulum mi.
        Phasellus consequat varius sodales. Proin arcu orci, tincidunt in porta ut, imperdiet ac
        nisi. Proin non ultricies neque, sit amet placerat turpis. Integer ut cursus erat. Aliquam
        dapibus auctor nisl, a vehicula enim posuere ac. Nullam non nulla id eros vestibulum
        pharetra. Suspendisse ac ex est. Nam consectetur mollis urna, nec posuere neque elementum
        et. Cras ullamcorper semper interdum. Aliquam accumsan, est ut consectetur bibendum, nisi
        erat sollicitudin mauris, vitae lacinia augue tortor vel diam. Morbi tincidunt ipsum id leo
        fermentum cursus. Sed arcu leo, cursus vitae rhoncus at, pharetra quis ex. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque a lorem
        ac sem imperdiet vulputate sit amet quis felis. Sed iaculis arcu et augue semper, ac
        vehicula elit mattis. Pellentesque sodales porta mattis. In placerat volutpat leo id
        facilisis. Aliquam tincidunt massa pharetra, lacinia mauris sed, dignissim velit.
        Suspendisse tincidunt magna et ex rhoncus, egestas consectetur justo facilisis. Fusce dictum
        magna lectus, a venenatis leo venenatis hendrerit. Etiam cursus fermentum metus id auctor.
        Morbi vitae elit eget dui eleifend scelerisque non non purus. Proin consectetur porta
        mauris, porttitor cursus leo consectetur ut. Suspendisse potenti. Aenean eget venenatis
        augue, eu placerat arcu. Proin quis dapibus ex. Proin malesuada massa ac est ornare, et
        pretium mi efficitur. Duis dictum enim commodo libero dignissim, at vulputate libero
        malesuada. Maecenas tempor, quam at ornare venenatis, sapien nunc blandit enim, vitae
        egestas turpis eros ac sem. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Morbi ut urna vitae leo dictum placerat. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed et massa
        tincidunt, rutrum arcu in, faucibus leo. Suspendisse dictum cursus dapibus. Vivamus rhoncus
        odio vel mi placerat, a lacinia mauris convallis. Praesent in arcu quis magna dictum sodales
        in eu nulla. Curabitur ullamcorper finibus porttitor. Suspendisse potenti. Phasellus maximus
        interdum condimentum. Pellentesque condimentum justo eget semper mollis. Nunc pretium lorem
        augue, nec vehicula sapien sagittis sit amet. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Aliquam non mattis eros. Nunc pulvinar, ante vitae facilisis semper, leo
        massa cursus lorem, non iaculis metus nulla vitae tortor. Aliquam sollicitudin elit id mi
        egestas volutpat. Aliquam a imperdiet lorem, quis pellentesque sem. Nulla non tellus sit
        amet lacus pharetra venenatis quis efficitur elit. Curabitur id lectus a ex feugiat
        interdum. Suspendisse interdum nunc ut metus tincidunt, id consectetur dui feugiat. Maecenas
        vitae purus quam. Duis nec fermentum mi. Nullam ut augue in velit efficitur lacinia. Duis
        consequat erat sit amet tellus auctor dapibus. Nulla vel mi et urna suscipit vehicula. Etiam
        rutrum metus sed est feugiat finibus. Donec vehicula, lorem ut auctor sodales, turpis metus
        ultrices sem, ac commodo leo lacus et lacus. Aenean volutpat consequat mi vel pharetra.
        Suspendisse in neque sed felis fringilla tempor a ut ante. Etiam lacinia nisl a mi
        convallis, vel accumsan velit maximus. Praesent laoreet orci vel leo mollis luctus.
        Curabitur porttitor suscipit augue, at pellentesque quam interdum vel. Vivamus lectus sem,
        imperdiet ac neque placerat, tincidunt rhoncus orci. Suspendisse ullamcorper sodales eros.
        Aenean pulvinar sed leo sagittis condimentum. Quisque egestas faucibus nibh nec cursus.
        Donec hendrerit urna congue sodales convallis. Integer et mauris eros. Integer vitae
        scelerisque elit. Etiam mi libero, suscipit ut elementum sit amet, facilisis auctor lorem.
        Mauris id elit elementum, tristique nisl quis, convallis est. Maecenas vel ipsum id dui
        efficitur vestibulum eu quis odio. Duis consequat tortor vel arcu sodales, in mollis purus
        posuere. Phasellus vel dui porta, euismod quam eget, mollis sapien. Integer cursus quam at
        arcu viverra, sit amet consequat elit vehicula. Mauris porta dapibus lacinia. Maecenas at
        rhoncus tortor. Suspendisse in urna ac est feugiat faucibus. Praesent maximus, eros a
        sagittis blandit, felis elit congue tortor, at fringilla nulla massa vitae est. Suspendisse
        facilisis ex lacus, sit amet tristique enim malesuada non. Pellentesque et tempor sem. Donec
        dignissim, dolor sed cursus tincidunt, enim sem dictum nisi, eget sollicitudin massa lectus
        quis nunc. Aliquam finibus arcu at fringilla commodo. Ut vel velit justo. Nunc magna odio,
        vulputate ut dolor sed, eleifend tempor elit. Sed et tempor erat. Donec ut nisi lacinia,
        efficitur nunc eu, accumsan velit. Morbi diam nunc, suscipit non ante at, gravida dapibus
        lacus. Fusce vitae tellus elit. Vivamus tempor erat metus, in tempus nulla lacinia non.
        Morbi nunc tellus, ultrices a ornare et, ornare vitae odio. Morbi aliquam fermentum erat in
        porttitor. In ultrices sed quam vitae gravida. Aenean pharetra vehicula nulla, non auctor
        mauris facilisis sit amet. Sed feugiat nulla sit amet convallis ullamcorper. Donec finibus
        volutpat diam, vel auctor mauris vulputate non. Aliquam arcu mi, tempor eget tempor ac,
        dignissim at sapien. Vivamus porta diam vitae enim finibus, quis auctor ipsum rhoncus. Morbi
        turpis libero, mattis in venenatis sit amet, ultrices in elit. Integer nec suscipit elit,
        sit amet scelerisque purus. Cras quam odio, sodales feugiat nunc eget, facilisis aliquam
        quam. Ut facilisis nulla sed congue placerat. Phasellus ac consectetur neque, ut consequat
        mauris. Aliquam sollicitudin massa varius nibh hendrerit mollis. Cras dapibus facilisis nibh
        id dapibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Integer congue massa nibh, sit amet maximus neque elementum ac. Sed tellus
        libero, pretium a urna in, imperdiet pharetra dolor. Quisque et vulputate nisl. Cras
        malesuada mauris condimentum nulla varius, a dictum augue sagittis. Nam venenatis orci
        consequat, lacinia ante sed, aliquet turpis. Praesent ultricies sem sit amet nunc sagittis
        hendrerit eget sed quam. Nulla euismod, urna ac porta lobortis, dui tellus pellentesque
        erat, in cursus leo orci in libero. Cras quis blandit massa. Vestibulum ut ultrices augue.
        Donec eros magna, hendrerit consequat faucibus ut, suscipit sit amet odio. Mauris fermentum
        elit urna, in feugiat mi venenatis ullamcorper. Cras eu enim et dui tempus vehicula non eget
        libero. Sed imperdiet velit eu lacus pulvinar hendrerit. Sed consectetur venenatis risus,
        dapibus fringilla lectus scelerisque eu. Etiam maximus libero eu urna pulvinar posuere.
        Aenean commodo neque metus, in luctus leo tempus et. Integer tincidunt leo at dignissim
        auctor. Praesent cursus elementum ornare. Suspendisse vitae tellus dui. Ut consectetur, arcu
        nec eleifend malesuada, diam turpis sodales dolor, in tincidunt tellus risus et quam. Nulla
        pulvinar luctus elit, non posuere tortor pulvinar quis. Suspendisse dapibus diam dui, nec
        scelerisque tellus tempor id. Aliquam pulvinar finibus condimentum. Integer at urna posuere,
        maximus ipsum non, efficitur urna. Aenean ac turpis faucibus, cursus neque at, sodales ex.
        Phasellus malesuada feugiat porttitor. Curabitur eu lacinia ante, ut ultrices nunc.
        Pellentesque in sapien vitae augue suscipit imperdiet. Nunc lacus metus, sagittis nec risus
        id, dictum tincidunt diam. Ut fermentum velit porttitor lacus tristique, et hendrerit est
        lacinia. In at ipsum pharetra, convallis sapien vel, ultrices magna. Aenean semper leo ut
        libero pellentesque, quis faucibus velit maximus. Mauris eu justo ligula. Fusce congue
        lectus id tortor sollicitudin volutpat. Aliquam imperdiet lacus id elementum euismod. Orci
        varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus metus at ornare dapibus.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed
        nibh enim, vestibulum vitae nisi vitae, lacinia tincidunt lectus. Mauris sodales tristique
        consectetur. Proin gravida libero quis nisl malesuada tincidunt. Proin sit amet suscipit
        nulla. Integer laoreet nisl eu mi efficitur, non ornare nisi laoreet. Nunc et quam lacus.
        Nam quis enim et ex mollis malesuada dictum sit amet nibh. Praesent vehicula malesuada
        mauris eget commodo. Morbi euismod, libero in tempus molestie, nunc lacus consequat libero,
        ut ornare tellus odio quis arcu. Aenean porttitor ante ut erat congue dictum. Praesent in
        magna vel purus bibendum auctor. Donec et scelerisque ligula. Sed malesuada ex sit amet
        vestibulum bibendum. Quisque convallis nec risus ultricies convallis. Maecenas a suscipit
        eros. Nullam id velit ornare, pharetra enim sit amet, tristique diam. Nulla viverra interdum
        diam, sagittis hendrerit libero pharetra vitae. Nunc vel lectus mauris. Nam porta, enim eu
        ultricies efficitur, augue ante commodo nulla, ut venenatis ante nibh ac ligula. Quisque
        pretium turpis et egestas lobortis. Morbi interdum ullamcorper eros, quis cursus est
        sagittis vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend,
        lectus quis aliquet mollis, augue sem molestie risus, quis sodales lorem lacus ac arcu.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras scelerisque tempus sem.
        Quisque maximus, erat eu egestas laoreet, sem diam fermentum ex, sit amet accumsan quam est
        sit amet odio. Ut dignissim efficitur justo, a venenatis enim pretium in. Vivamus pulvinar
        vehicula neque, in scelerisque magna fringilla quis. Ut hendrerit turpis eu tortor aliquet
        malesuada. Mauris tempor eget metus non egestas. Aenean dignissim ex rutrum, egestas sapien
        sed, gravida arcu. Aliquam varius mattis mauris, sed vulputate nulla imperdiet vel. Etiam
        consectetur lacinia aliquet. Quisque sit amet tincidunt nibh. Donec posuere fermentum nibh
        ut pellentesque. Donec sit amet ante et tellus luctus blandit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Suspendisse potenti. Vestibulum tortor arcu, suscipit quis dui
        quis, aliquet efficitur sem. Ut rhoncus velit velit, ac egestas ipsum vulputate vel. Nam sed
        pharetra neque, sed fringilla turpis. Aenean consequat tempus finibus. Mauris at massa
        sapien. Fusce ut orci neque. In feugiat justo augue, sit amet cursus ipsum consequat sit
        amet. Quisque elit leo, euismod at gravida non, vestibulum vel lacus. Sed sed nisl nibh. Nam
        tincidunt tortor sapien. Etiam maximus et purus ut gravida. Duis ultrices semper pulvinar.
        Ut non dapibus libero. Maecenas vitae egestas leo. Nunc laoreet risus a condimentum
        pharetra. Praesent ac ornare arcu. Morbi sit amet neque nec ligula iaculis volutpat. Vivamus
        suscipit imperdiet eros consectetur porttitor. Nam et egestas lectus. Nunc efficitur purus
        vel consectetur finibus. Pellentesque finibus ultricies magna, tempus cursus ipsum dictum
        id. Ut non eros risus. Pellentesque quis tincidunt felis, non dictum nisi. Nam lorem tellus,
        malesuada sed metus ut, gravida tincidunt diam. Proin et est accumsan, commodo nisl quis,
        sagittis purus. Vivamus accumsan ultricies eros quis laoreet. Cras vitae nibh sit amet dolor
        tincidunt scelerisque eget at ex. Etiam eget nibh ac tortor euismod efficitur. Quisque
        pharetra ipsum vitae auctor ultrices. Ut vel massa mi. Nam non tempus erat, elementum
        consequat odio. Mauris gravida mauris tellus, et tincidunt mauris sagittis et. Morbi lacus
        leo, molestie vitae mollis ut, auctor in orci. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Integer ullamcorper metus augue, eu tristique metus scelerisque sed.
        Vestibulum accumsan elit eget dolor facilisis laoreet rutrum sed nisl. Nam pretium dui ut
        dolor iaculis placerat. Nullam tincidunt elit diam, at pellentesque dolor posuere nec. Class
        aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc a
        ullamcorper nisl, scelerisque euismod magna. Mauris aliquam arcu est, eget tincidunt velit
        rutrum ac. Sed feugiat ante sem, ut volutpat massa cursus quis. Cras malesuada est a felis
        consectetur, ut iaculis felis interdum. Pellentesque habitant morbi tristique senectus et
        netus et malesuada fames ac turpis egestas. Etiam viverra neque vel est rutrum, sed rutrum
        leo mattis. Aenean blandit velit est, sed pellentesque sem sagittis sed. Fusce sit amet mi
        tincidunt, tincidunt augue sed, porttitor sem. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Pellentesque lorem ex, tincidunt sit
        amet dolor in, iaculis congue est. Vestibulum ut elit sed est mollis feugiat a ac dui. Fusce
        iaculis, dui a ullamcorper mattis, quam elit malesuada augue, ut posuere nibh enim sed diam.
        Vestibulum nunc turpis, luctus vel risus quis, maximus placerat nulla. Mauris dui quam,
        euismod eu cursus vel, fringilla ac massa. Duis pellentesque nec libero vel lacinia. Duis
        fringilla porta purus, ac pharetra massa lobortis ac. Sed pharetra ante in ligula auctor
        euismod. Vivamus dui tellus, molestie ut leo quis, vestibulum tempor turpis.{' '}
      </p>
      <Button style='success' rounded onClick={handleClick}>
        Show Modal
      </Button>
    </div>
  );
};

export const Route = createFileRoute('/modal')({
  component: RouteComponent
});

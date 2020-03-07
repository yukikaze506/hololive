import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'TokinoSora',
        loadChildren: () => import('./components/contents/tokino-sora/tokino-sora.module').then(mod => mod.TokinoSoraModule)
    },
    {
        path: 'AZKi',
        loadChildren: () => import('./components/contents/azki/azki.module').then(mod => mod.AZKiModule)
    },
    {
        path: 'Roboco-san',
        loadChildren: () => import('./components/contents/roboco-san/roboco-san.module').then(mod => mod.RobocoSanModule)
    },
    {
        path: 'Sakuramiko',
        loadChildren: () => import('./components/contents/sakuramiko/sakuramiko.module').then(mod => mod.SakuramikoModule)
    },
    {
        path: 'ShirakamiFubuki',
        loadChildren: () => import('./components/contents/shirakami-fubuki/shirakami-fubuki.module').then(mod => mod.ShirakamiFubukiModule)
    },
    {
        path: 'NatsuiroMatsuri',
        loadChildren: () => import('./components/contents/natsuiro-matsuri/natsuiro-matsuri.module').then(mod => mod.NatsuiroMatsuriModule)
    },
    {
        path: 'YozoraMel',
        loadChildren: () => import('./components/contents/yozora-mel/yozora-mel.module').then(mod => mod.YozoraMelModule)
    },
    {
        path: 'AkaiHaato',
        loadChildren: () => import('./components/contents/akai-haato/akai-haato.module').then(mod => mod.AkaiHaatoModule)
    },
    {
        path: 'AkiRosenthal',
        loadChildren: () => import('./components/contents/aki-rosenthal/aki-rosenthal.module').then(mod => mod.AkiRosenthalModule)
    },
    {
        path: 'MinatoAqua',
        loadChildren: () => import('./components/contents/minato-aqua/minato-aqua.module').then(mod => mod.MinatoAquaModule)
    },
    {
        path: 'YuzukiChoco',
        loadChildren: () => import('./components/contents/yuzuki-choco/yuzuki-choco.module').then(mod => mod.YuzukiChocoModule)
    },
    {
        path: 'NakiriAyame',
        loadChildren: () => import('./components/contents/nakiri-ayame/nakiri-ayame.module').then(mod => mod.NakiriAyameModule)
    },
    {
        path: 'MurasakiShion',
        loadChildren: () => import('./components/contents/murasaki-shion/murasaki-shion.module').then(mod => mod.MurasakiShionModule)
    },
    {
        path: 'OozoraSubaru',
        loadChildren: () => import('./components/contents/oozora-subaru/oozora-subaru.module').then(mod => mod.OozoraSubaruModule)
    },
    {
        path: 'OokamiMio',
        loadChildren: () => import('./components/contents/ookami-mio/ookami-mio.module').then(mod => mod.OokamiMioModule)
    },
    {
        path: 'NekomataOkayu',
        loadChildren: () => import('./components/contents/nekomata-okayu/nekomata-okayu.module').then(mod => mod.NekomataOkayuModule)
    },
    {
        path: 'InugamiKorone',
        loadChildren: () => import('./components/contents/inugami-korone/inugami-korone.module').then(mod => mod.InugamiKoroneModule)
    },
    {
        path: 'ShiranuiFlare',
        loadChildren: () => import('./components/contents/shiranui-flare/shiranui-flare.module').then(mod => mod.ShiranuiFlareModule)
    },
    {
        path: 'ShiroganeNoel',
        loadChildren: () => import('./components/contents/shirogane-noel/shirogane-noel.module').then(mod => mod.ShiroganeNoelModule)
    },
    {
        path: 'Houshoumarine',
        loadChildren: () => import('./components/contents/houshoumarine/houshoumarine.module').then(mod => mod.HoushoumarineModule)
    },
    {
        path: 'UsadaPekora',
        loadChildren: () => import('./components/contents/usada-pekora/usada-pekora.module').then(mod => mod.UsadaPekoraModule)
    },
    {
        path: 'UruhaRushia',
        loadChildren: () => import('./components/contents/uruha-rushia/uruha-rushia.module').then(mod => mod.UruhaRushiaModule)
    },
    {
        path: 'HoshimatiSuisei',
        loadChildren: () => import('./components/contents/hoshimati-suisei/hoshimati-suisei.module').then(mod => mod.HoshimatiSuiseiModule)
    },
    {
        path: 'AmaneKanata',
        loadChildren: () => import('./components/contents/amane-kanata/amane-kanata.module').then(mod => mod.AmaneKanataModule)
    },
    {
        path: 'KiryuCoco',
        loadChildren: () => import('./components/contents/kiryu-coco/kiryu-coco.module').then(mod => mod.KiryuCocoModule)
    },
    {
        path: 'TsunomakiWatame',
        loadChildren: () => import('./components/contents/tsunomaki-watame/tsunomaki-watame.module').then(mod => mod.TsunomakiWatameModule)
    },
    {
        path: 'TokoyamiTowa',
        loadChildren: () => import('./components/contents/tokoyami-towa/tokoyami-towa.module').then(mod => mod.TokoyamiTowaModule)
    },
    {
        path: 'HimemoriLuna',
        loadChildren: () => import('./components/contents/himemori-luna/himemori-luna.module').then(mod => mod.HimemoriLunaModule)
    },
    {
        path: 'HanasakiMiyabi',
        loadChildren: () => import('./components/contents/hanasaki-miyabi/hanasaki-miyabi.module').then(mod => mod.HanasakiMiyabiModule)
    },
    {
        path: 'KanadeIzuru',
        loadChildren: () => import('./components/contents/kanade-izuru/kanade-izuru.module').then(mod => mod.KanadeIzuruModule)
    },
    {
        path: 'KagamiKira',
        loadChildren: () => import('./components/contents/kagami-kira/kagami-kira.module').then(mod => mod.KagamiKiraModule)
    },
    {
        path: 'Arurandeisu',
        loadChildren: () => import('./components/contents/arurandeisu/arurandeisu.module').then(mod => mod.ArurandeisuModule)
    },
    {
        path: 'YakushijiSuzaku',
        loadChildren: () => import('./components/contents/yakushiji-suzaku/yakushiji-suzaku.module').then(mod => mod.YakushijiSuzakuModule)
    },
    {
        path: 'Rikka',
        loadChildren: () => import('./components/contents/rikka/rikka.module').then(mod => mod.RikkaModule)
    },
    {
        path: 'AstelLeda',
        loadChildren: () => import('./components/contents/astel-leda/astel-leda.module').then(mod => mod.AstelLedaModule)
    },
    {
        path: 'KishidoTemma',
        loadChildren: () => import('./components/contents/kishido-temma/kishido-temma.module').then(mod => mod.KishidoTemmaModule)
    },
    {
        path: 'YukokuRoberu',
        loadChildren: () => import('./components/contents/yukoku-roberu/yukoku-roberu.module').then(mod => mod.YukokuRoberuModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

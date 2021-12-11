import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Mariella Moon",
      "title": "#AppleToo organizer will no longer withdraw her labor board complaint",
      "description": "Back in November, Apple engineer Cher Scarlett left the tech giant. Scarlett was one of the lead organizers of the #AppleToo movement and aired fellow employees' and workers' grievances against the company on their behalf. She also filed a complaint against A…",
      "url": "https://www.engadget.com/appletoo-organizer-cher-scarlett-no-longer-withdraw-labor-board-complaint-062929530.html",
      "urlToImage": "https://s.yimg.com/os/creatr-images/2019-10/65e95190-e9db-11e9-a7fb-fd7ac0382413",
      "publishedAt": "2021-12-10T06:29:29Z",
      "content": "Back in November, Apple engineer Cher Scarlett left the tech giant. Scarlett was one of the lead organizers of the #AppleToo movement and aired fellow employees' and workers' grievances against the c… [+2500 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Mariella Moon",
      "title": "Apple's third-gen AirPods fall to an all-time low of $140",
      "description": "If you missed the chance to get Apple's latest AirPods model last Black Friday, it may have been a blessing in disguise. It sold for $150 that weekend, which is a great deal for the new model, but it now costs even less on Amazon. You can get the third-gen Ap…",
      "url": "https://www.engadget.com/apple-third-gen-airpods-all-time-low-amazon-134518480.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-12/d4febe20-59b5-11ec-b3c9-8079fb2c87b2",
      "publishedAt": "2021-12-10T13:45:18Z",
      "content": "If you missed the chance to get Apple's latest AirPods model last Black Friday, it may have been a blessing in disguise. It sold for $150 that weekend, which is a great deal for the new model, but it… [+1861 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Cherlynn Low",
      "title": "Engadget Podcast: The best and worst in tech 2021",
      "description": "This week, Cherlynn and Devindra recap the year's greatest winners and losers in tech. From the expected companies like Apple, Facebook (sorry, Meta) and Google, to the ones we begrudgingly acknowledge, like NFTs and the Metaverse, our hosts look back on 2021…",
      "url": "https://www.engadget.com/engadget-podcast-best-worst-winners-losers-tech-2021-133100496.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2020-11/c8e851c0-2b3d-11eb-baea-6c6fe29971fb",
      "publishedAt": "2021-12-10T13:31:00Z",
      "content": "This week, Cherlynn and Devindra recap the year's greatest winners and losers in tech. From the expected companies like Apple, Facebook (sorry, Meta) and Google, to the ones we begrudgingly acknowled… [+932 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Valentina Palladino",
      "title": "Apple's second-gen AirPods drop to $100, plus the rest of the week's best tech deals",
      "description": "If you're still on the hunt for good tech gifts to give this year, you still have time to grab some that will arrive before the holidays. Apple's second-generation AirPods are on sale again for $100, while the Fitbit Charge 5 fitness tracker is back down to $…",
      "url": "https://www.engadget.com/apple-second-gen-airpods-drop-to-100-best-weekly-tech-deals-164543846.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2020-07/c9ee07d0-c117-11ea-b67f-851aefcf30f2",
      "publishedAt": "2021-12-10T16:45:43Z",
      "content": "If you're still on the hunt for good tech gifts to give this year, you still have time to grab some that will arrive before the holidays. Apple's second-generation AirPods are on sale again for $100,… [+10811 chars]"
    },
    {
      "source": {
        "id": "engadget",
        "name": "Engadget"
      },
      "author": "Billy Steele",
      "title": "Yamaha YH-L700A review: When premium features aren’t enough",
      "description": "When it comes to noise cancelling headphones, there are several effective options that will get the job done. It’s putting together great audio quality with powerful noise blocking abilities and other handy features that cause many companies to stumble. The l…",
      "url": "https://www.engadget.com/yamaha-yh-l700a-review-130056716.html",
      "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-12/8a73df20-592e-11ec-8375-2a72806c444d",
      "publishedAt": "2021-12-10T13:00:56Z",
      "content": "Without 3D Sound Field, the YH-L700A is an average sounding set of noise cancelling headphones. Theres good clarity and detail, but the mid-range can be overbearing when youre listening to a full ban… [+4900 chars]"
    },
    {
      "source": {
        "id": "wired",
        "name": "Wired"
      },
      "author": "Steven Levy",
      "title": "Big Tech’s Flagships Are Leaking",
      "description": "Plus: The downfall of Yahoo and AOL, a look back at my career, and a concerning convergence in space.",
      "url": "https://www.wired.com/story/plaintext-big-tech-flagships-leaking/",
      "urlToImage": "https://media.wired.com/photos/61b29fe98fad380cdeaf62d7/191:100/w_1280,c_limit/Business_Dripping%20Handshake-108804079.jpg",
      "publishedAt": "2021-12-10T14:00:00Z",
      "content": "In short, the customer experience on Amazon isnt what it used to be. But I dont want to single out the ecommerce giant for this regression of its core product. The phenomenon is now endemic among the… [+3015 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Corin Faife",
      "title": "‘Extremely bad’ vulnerability found in widely used logging system",
      "description": "The Log4Shell exploit gives attackers a simple way to execute code on any vulnerable Java machine, potentially causing the biggest cybersecurity threat for a decade",
      "url": "https://www.theverge.com/2021/12/10/22828303/log4j-library-vulnerability-log4shell-zero-day-exploit",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/-DYDHOYMJfyKizamFrWJWm0_0jI=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/10265107/acastro_170621_1777_0006_v4.jpg",
      "publishedAt": "2021-12-10T20:52:57Z",
      "content": "The Log4Shell exploit gives attackers a simple way to execute code on any vulnerable machine\r\nIllustration by Alex Castro / The Verge\r\nSecurity teams at companies large and small are scrambling to pa… [+3180 chars]"
    },
    {
      "source": {
        "id": "the-verge",
        "name": "The Verge"
      },
      "author": "Victoria Song",
      "title": "Peloton really wants you to know that what happened to Big isn’t because of its bike",
      "description": "Peloton says that while it was unaware Mr. Big would die after using its bike in the first episode of HBO Max’s Sex and the City reboot, the character’s lifestyle is the more likely culprit.",
      "url": "https://www.theverge.com/2021/12/10/22828003/peloton-bike-satc-and-just-like-that",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/tGOO-mXtMwbXNM-_lmsgXVkHaaM=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22233853/akrales210108_4344_0020.jpg",
      "publishedAt": "2021-12-10T20:13:05Z",
      "content": "Peloton says it was unaware of the shocking plot point in HBO Maxs Sex and the City reboot\r\nA Peloton Bike was at the center of a shocking plot twist in HBOs Sex and the City reboot.\r\nPhoto by Amelia… [+3688 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.com"
      },
      "author": "Phillip Tracy",
      "title": "Apple Hit With Lawsuit Claiming the Apple Watch Is Unsafe",
      "description": "The complaint purports the Apple Watch can cause injury when a bloated battery damages the screen.",
      "url": "https://gizmodo.com/apple-hit-with-lawsuit-claiming-the-apple-watch-is-unsa-1848193383",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/bc2c6f7f27cd87c630b8083dc95628c3.jpg",
      "publishedAt": "2021-12-10T16:00:00Z",
      "content": "The Apple Watch is once again at the center of a lawsuit.\r\nA class-action lawsuit filed on Wednesday alleges the Apple Watch poses a dangerous safety hazard to customers due to a battery swelling def… [+2922 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.com"
      },
      "author": "Andrew Liszewski",
      "title": "Analogue Pocket Preorders Are Reopening, but the Price Is Going Up",
      "description": "After revealing a couple of weeks ago that its Pocket handheld gaming system would officially start shipping on Dec. 13, today Analogue followed up with good news for those who missed preorders the first time around. Starting Dec. 14, preorders for the Pocket…",
      "url": "https://gizmodo.com/analogue-pocket-preorders-are-reopening-but-the-price-1848194611",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/054fdab21aa3ca2d3e312a1169415759.jpg",
      "publishedAt": "2021-12-10T18:10:00Z",
      "content": "After revealing a couple of weeks ago that its Pocket handheld gaming system would officially start shipping on Dec. 13, today Analogue followed up with good news for those who missed preorders the f… [+1467 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Gizmodo.com"
      },
      "author": "Lucas Ropek",
      "title": "Minecraft Players Need to Update Immediately as Nasty Zero-Day Threatens Apps Across the Web",
      "description": "Everybody get ready to patch up. What started off as a security issue for fans of the immensely popular video game Minecraft has quickly transformed into a full-blown, internet-wide crisis. Read more...",
      "url": "https://gizmodo.com/minecraft-players-need-to-update-immediately-as-nasty-z-1848195731",
      "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/fe177f2116229616d986399089426b1b.jpg",
      "publishedAt": "2021-12-10T21:50:00Z",
      "content": "Everybody get ready to patch up. What started off as a security issue for fans of the immensely popular video game Minecraft has quickly transformed into a full-blown, internet-wide crisis. \r\nIn shor… [+2623 chars]"
    },
    {
      "source": {
        "id": "cnn",
        "name": "CNN"
      },
      "author": "Brianna Keilar, CNN",
      "title": "Recipe: Game day chili mac",
      "description": "Chili mac is a favorite meal of United States military members -- and it's what CNN anchor Brianna Keilar is making to honor them on the Army-Navy football game day December 11. Here's the recipe.",
      "url": "https://www.cnn.com/2021/12/10/health/chili-mac-recipe-wellness-cnnhosts/index.html",
      "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211209133635-04-host-with-the-most-brianna-pamela-super-tease.jpg",
      "publishedAt": "2021-12-10T16:34:41Z",
      "content": "Brianna Keilar is the host of CNN's New Day.\r\n (CNN)Chili mac is a favorite MRE (ready-to-eat meal) of United States service members -- and it's what CNN anchor Brianna Keilar is making to honor them… [+2041 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": null,
      "title": "Tesla, Southwest Airlines, Snap Inc, Moderna, SM Energy - Reuters",
      "description": "U.S. stock indexes rose on Friday after data showed consumer prices rose largely in line with estimates last month, taking some pressure off investors concerned about the Federal Reserve's aggressive tightening of its monetary policy.",
      "url": "https://www.reuters.com/markets/asia/tesla-southwest-airlines-snap-inc-moderna-sm-energy-2021-12-10/",
      "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=63",
      "publishedAt": "2021-12-10T15:55:00Z",
      "content": "U.S. stock indexes rose on Friday after data showed consumer prices rose largely in line with estimates last month, taking some pressure off investors concerned about the Federal Reserve's aggressive… [+2796 chars]"
    },
    {
      "source": {
        "id": "reuters",
        "name": "Reuters"
      },
      "author": null,
      "title": "General Motors, AMC Entertainment, Oracle, Costco - Reuters",
      "description": "U.S. stock indexes edged higher in choppy trading on Friday after data showed consumer prices rose in line with estimates last month, taking some pressure off investors concerned about the Federal Reserve's aggressive tightening of its monetary policy.",
      "url": "https://www.reuters.com/markets/asia/general-motors-amc-entertainment-oracle-costco-2021-12-10/",
      "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=63",
      "publishedAt": "2021-12-10T18:01:00Z",
      "content": "U.S. stock indexes edged higher in choppy trading on Friday after data showed consumer prices rose in line with estimates last month, taking some pressure off investors concerned about the Federal Re… [+3148 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Presented by Emma John, Adam Collins and Geoff Lemon. Produced by Joe Koning. The Final Word is produced by Bad Producer Productions and edited by James Hurley. Executive producers Gabrielle Jackson and Melanie Tait",
      "title": "Joe Root and England refuse to buckle at the Ashes – The Final Word podcast",
      "description": "Emma John offers her thoughts on day three of the first Test before Adam Collins and Geoff Lemon share their views from the GabbaDo you know a lost cause when you see one? Emma hails the nerveless Joe Root and Dawid Malan for refusing to fold on day three of …",
      "url": "https://www.theguardian.com/sport/audio/2021/dec/10/joe-root-and-england-refuse-to-buckle-at-the-ashes-the-final-word-podcast",
      "urlToImage": "https://i.guim.co.uk/img/media/2613441b740519157de873e02c72bb6a13c8ef46/0_129_4038_2423/master/4038.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=53c713a1a1db1c8f5a45da4e230808f1",
      "publishedAt": "2021-12-10T10:24:27Z",
      "content": "Do you know a lost cause when you see one? Emma hails the nerveless Joe Root and Dawid Malan for refusing to fold on day three of the first Test, setting up a proper contest at the Gabba.\r\nAdam and G… [+361 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "The Guardian"
      },
      "author": "Simon Wardell",
      "title": "Another Round to the Hand of God: the seven best films to watch on TV this week",
      "description": "Thomas Vinterberg’s Danish drama unfold social norms as Mads Mikkelsen’s teacher undertakes a daily drinking experiment with his colleagues, while Paolo Sorrentino’s coming-of-age tale charts love, betrayal and football in NaplesAn ambivalent attitude towards…",
      "url": "https://amp.theguardian.com/film/2021/dec/10/another-round-to-the-hand-of-god-the-seven-best-films-to-watch-on-tv-this-week",
      "urlToImage": "https://i.guim.co.uk/img/media/3952ba88c4e7dcd005ec7c08cf662f51efb29095/0_0_5000_3000/master/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=2dc7053402063a15e32d48a2b82fc448",
      "publishedAt": "2021-12-10T09:00:35Z",
      "content": "Pick of the weekAnother Round\r\nMads Mikkelsen (centre) in Another Round. Photograph: Landmark Media/Alamy\r\nAn ambivalent attitude towards drinking and its central role in society suffuses this Oscar-… [+4739 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MacRumors"
      },
      "author": "Tim Hardwick",
      "title": "British Car Leasing Company Creates 'Apple Car' 3D Render Based on Patents",
      "description": "British vehicle leasing company Vanarama has taken a stab at imagining what the first Apple Car could look like, taking inspiration from iPhones, MacBooks, and other Apple products, and combining them with real Apple patents to come up with a 3D concept rende…",
      "url": "https://www.macrumors.com/2021/12/10/apple-car-3d-render-based-on-patents/",
      "urlToImage": "https://images.macrumors.com/t/8WaSem5pm2ZFQq1OZSxN1B94UZw=/1600x/article-new/2021/12/vanarama-apple-car-concept.jpg",
      "publishedAt": "2021-12-10T12:29:35Z",
      "content": "British vehicle leasing company Vanarama has taken a stab at imagining what the first Apple Car could look like, taking inspiration from iPhones, MacBooks, and other Apple products, and combining the… [+2401 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "MacRumors"
      },
      "author": "Juli Clover",
      "title": "MacRumors Giveaway: Win a Jackery Explorer 500 Portable Power Station and 100W Solar Panel",
      "description": "For this week's giveaway, we've teamed up with Jackery to offer MacRumors readers a chance to win a Jackery Explorer 500 Portable Power Station and a SolarSaga 100W Solar Panel, a combo that's perfect for keeping Apple devices charged in emergencies, when cam…",
      "url": "https://www.macrumors.com/2021/12/10/macrumors-giveaway-jackery-power-station-solar-panel/",
      "urlToImage": "https://images.macrumors.com/t/2zZP_Cg-IRWyblzDq_0a_gA04DY=/2000x/article-new/2021/12/jackery-explorer-500-solar-panel.jpg",
      "publishedAt": "2021-12-10T17:01:37Z",
      "content": "For this week's giveaway, we've teamed up with Jackery to offer MacRumors readers a chance to win a Jackery Explorer 500 Portable Power Station and a SolarSaga 100W Solar Panel, a combo that's perfec… [+3403 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNET"
      },
      "author": "Shelby Brown",
      "title": "Splitter Critters now available on Apple Arcade - CNET",
      "description": "Splitter Critters is a fun, challenging and addictive puzzle game.",
      "url": "https://www.cnet.com/tech/gaming/splitter-critters-now-available-on-apple-arcade/",
      "urlToImage": "https://www.cnet.com/a/img/3Zn6Rft17w_xEpiv9rSEw7HRgZU=/1200x630/2021/11/10/e443ae69-823e-4d29-b82f-d766b460f6fe/splitter-critters.jpg",
      "publishedAt": "2021-12-10T15:55:10Z",
      "content": "Splitter Critters is no available on Apple Arcade.\r\nApple Arcade/Screenshot by Shelby Brown\r\nApple Arcade, a CNET Editors' Choice pick for 2021, expanded its catalog of over 225 games with the additi… [+1313 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "CNET"
      },
      "author": "Adam Benjamin",
      "title": "iOS 15.2: Apple's next mobile OS nears public release - CNET",
      "description": "Apple's latest iOS beta is almost here. New features include a privacy report, a new Apple Music tier, a music search function and more.",
      "url": "https://www.cnet.com/tech/services-and-software/ios-15-2-apples-next-mobile-os-nears-public-release/",
      "urlToImage": "https://www.cnet.com/a/img/nPCdtUbTKbPtoyKRTuIYkUm3t60=/1200x630/2021/08/04/e608de4a-1237-4080-aeec-4ac51d93f68e/iphone-ios-15-2021-cnet-03.jpg",
      "publishedAt": "2021-12-10T19:00:09Z",
      "content": "iOS 15.2 may only be a few weeks away from a public release.\r\nSarah Tew/CNET\r\nApple released iOS 15 in September before following up with iOS 15.1 -- the first major update to Apple's latest operatin… [+4384 chars]"
    }
  ]
  constructor() {
    super();
    this.state = {
      articles:this.articles,
      loading:false
    }
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>Top headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title={'title'} description={'description'} imageUrl="https://s.yimg.com/os/creatr-uploaded-images/2021-12/8a73df20-592e-11ec-8375-2a72806c444d" />
          </div>
          <div className="col-md-4">
            <NewsItem title={'title'} description={'description'} imageUrl="https://s.yimg.com/os/creatr-uploaded-images/2021-12/8a73df20-592e-11ec-8375-2a72806c444d" />
          </div>
          <div className="col-md-4">
            <NewsItem title={'title'} description={'description'} imageUrl="https://s.yimg.com/os/creatr-uploaded-images/2021-12/8a73df20-592e-11ec-8375-2a72806c444d" />
          </div>
        </div>

      </div>
    )
  }
}

export default News

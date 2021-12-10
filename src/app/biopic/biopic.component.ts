import { Component } from "@angular/core"

@Component({

    selector: 'biopic',
    templateUrl: './biopic.component.html',
    styleUrls: ['./biopic.component.css']


})

export class BiopicComponent {
    movieName =true;
    movieList = {
        "page": 1,
        "results": [
            {


            
                "id": 580489,
                "poster_path": "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
                "title": "Venom: Let There Be Carnage",
                "vote_average": 7.2,
                "overview": "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.", "release_date": "2021-09-30", "vote_count": 2955, "adult": false, "backdrop_path": "/70nxSw3mFBsGmtkvcs91PbjerwD.jpg", "video": false, "genre_ids": [878, 28, 12], "original_title": "Venom: Let There Be Carnage", "original_language": "en", "popularity": 11363.811, "media_type": "movie"
            } ,

            {
                "id": 88329,
                "poster_path": "/pqzjCxPVc9TkVgGRWeAoMmyqkZV.jpg",
                "original_name": "Hawkeye",
                "origin_country": ["US"],
                "vote_average": 8.9, "first_air_date": "2021-11-24",
                "name": "Hawkeye",
                "backdrop_path": "/1R68vl3d5s86JsS2NPjl8UoMqIS.jpg",
                "vote_count": 214,
                "genre_ids": [10759, 18],
                "overview": "Former Avenger Clint Barton has a seemingly simple mission: get back to his family for Christmas. Possible? Maybe with the help of Kate Bishop, a 22-year-old archer with dreams of becoming a superhero. The two are forced to work together when a presence from Barton’s past threatens to derail far more than the festive spirit.", "original_language": "en", "popularity": 441.608, "media_type": "tv"
            },
            {
                "id": 615666,
                "poster_path": "/1sRejtiHOZGggZd9RcmdqbapLM5.jpg",
                "title": "A Boy Called Christmas",
                "vote_average": 8.0,
                "overview": "An ordinary young boy called Nikolas sets out on an extraordinary adventure into the snowy north in search of his father who is on a quest to discover the fabled village of the elves, Elfhelm. Taking with him a headstrong reindeer called Blitzen and a loyal pet mouse, Nikolas soon meets his destiny in this magical and endearing story that proves nothing is impossible…", "release_date": "2021-11-25", "vote_count": 22, "adult": false, "backdrop_path": "/odKqOY6VE6C59YAdGHB0b5Havye.jpg", "video": false, "genre_ids": [12, 10751, 14], "original_title": "A Boy Called Christmas", "original_language": "en", "popularity": 72.085, "media_type": "movie"
            },
        
            {
                "adult": false,
                "backdrop_path": "/vr6TqnRLcZACo9htfcmBUcjs2t4.jpg",
                "genre_ids": [10751, 35],
                "original_language": "en",
                "original_title": "8-Bit Christmas",
                "poster_path": "/wlh2wY2yC2SkwAdjcMRH4oiw04V.jpg", "vote_count": 9, "video": false, "vote_average": 6.3, "title": "8-Bit Christmas", "overview": "In suburban Chicago during the late 1980s, ten-year-old Jake Doyle embarks on a herculean quest to get the latest and greatest video game system for Christmas.", "release_date": "2021-11-25", "id": 802217, "popularity": 57.613, "media_type": "movie"
            },
            {
                "adult": false,
                "backdrop_path": "/5BiKWM5VyNWz42vU3CpCgt4xHNk.jpg",
                "genre_ids": [18],
                "id": 718633,
                "original_language": "en",
                "original_title": "Bruised",
                "overview": "Jackie Justice is a mixed martial arts fighter who leaves the sport in disgrace. Down on her luck and simmering with rage and regret years after the fight, she's coaxed into a brutal underground fight by her manager and boyfriend Desi and grabs the attention of a fight league promoter who promises Jackie a life back in the Octagon. But the road to redemption becomes unexpectedly personal when Manny - the son she gave up as an infant - shows up at her doorstep. A triumphant story of a fighter who reclaims her power, in and out of the ring, when everyone has counted her out", "poster_path": "/axibOQF9QnThrr8M37ufAYurP4R.jpg", "release_date": "2021-11-17", "title": "Bruised", "video": false, "vote_average": 7.9, "vote_count": 17, "popularity": 65.405, "media_type": "movie"
            },
            {
                "adult": false,
                "backdrop_path": "/tFwuQaHSFlb6mMDre3zruuux5Vk.jpg",
                "genre_ids": [18],
                "original_language": "en",
                "original_title": "Spencer",
                "poster_path": "/7GcqdBKaMM9BWXWN07BirBMkcBF.jpg",
                "vote_count": 64,
                "video": false,
                "vote_average": 7.2,
                "title": "Spencer",
                "overview": "During her Christmas holidays with the royal family at the Sandringham estate in Norfolk, England, Diana decides to leave her marriage to Prince Charles.", "release_date": "2021-11-05", "id": 716612, "popularity": 131.809, "media_type": "movie"
            },
            {
                "overview": "A world-famous comedian desperately searches for a way out after a night in Philadelphia with his brother threatens to sabotage more than his success.",
                "name": "True Story",
                "vote_count": 6,
                "genre_ids": [18, 80],
                "backdrop_path": "/yGpmZYJ8fb543B3tIKjzcRHgJsX.jpg",
                "original_language": "en",
                "first_air_date": "2021-11-24",
                "original_name": "True Story",
                "origin_country": ["US"],
                "poster_path": "/7zMbzJijHQv5oOtkb8rdYarn9X6.jpg",
                "vote_average": 8.7,
                "id": 134029,
                "popularity": 73.972,
                "media_type": "tv"
            },
            {
                "vote_average": 8.1,
                "overview": "Follow Moiraine, a member of the shadowy and influential all-female organization called the “Aes Sedai” as she embarks on a dangerous, world-spanning journey with five young men and women. Moiraine believes one of them might be the reincarnation of an incredibly powerful individual, whom prophecies say will either save humanity or destroy it.", "id": 71914, "backdrop_path": "/1P3QtW1IkivqDrKbbwuR0zCYIf8.jpg", "first_air_date": "2021-11-18", "genre_ids": [10765, 18, 10759], "origin_country": ["US"], "original_language": "en", "vote_count": 206, "poster_path": "/mpgDeLhl8HbhI03XLB7iKO6M6JE.jpg", "name": "The Wheel of Time", "original_name": "The Wheel of Time", "popularity": 2208.336, "media_type": "tv"
            },
            {
                "backdrop_path": "/6Fzyuwn8KeMCSqRILfdrDmCvmod.jpg",
                "id": 54155,
                "genre_ids": [10759, 18],
                "original_language": "en",
                "name": "Hanna",
                "original_name": "Hanna",
                "origin_country": ["US"],
                "vote_average": 7.6,
                "overview": "This thriller and coming-of-age drama follows the journey of an extraordinary young girl as she evades the relentless pursuit of an off-book CIA agent and tries to unearth the truth behind who she is. Based on the 2011 Joe Wright film.", "vote_count": 522, "poster_path": "/pe10EUjgO2jgwiu01MAv9l3IjxG.jpg", "first_air_date": "2019-03-28", "popularity": 139.747, "media_type": "tv"
            }, {
                "vote_average": 7.9,
                "overview": "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.", "release_date": "2021-09-01", "adult": false, "backdrop_path": "/cinER0ESG0eJ49kXlExM0MEWGxW.jpg", "vote_count": 3543, "genre_ids": [28, 12, 14], "video": false, "original_language": "en", "original_title": "Shang-Chi and the Legend of the Ten Rings", "poster_path": "/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg", "id": 566525, "title": "Shang-Chi and the Legend of the Ten Rings", "popularity": 4951.195, "media_type": "movie"
            }, {
                "adult": false,
                "backdrop_path": "/pfaog3542ObQ2qONa34Oh8gJ5vq.jpg",
                "genre_ids": [16, 12, 10751],
                "id": 649928,
                "original_language": "en",
                "original_title": "Robin Robin",
                "overview": "A bird raised by mice begins to question where she belongs and sets off on a daring journey of self-discovery.", "poster_path": "/p9iZ9OVPvr9tSqruiNgjReGvYB9.jpg", "release_date": "2021-10-09", "title": "Robin Robin", "video": false, "vote_average": 7.0, "vote_count": 2, "popularity": 7.526, "media_type": "movie"
            }, {
                "id": 106651,
                "genre_ids": [18, 80, 9648, 10765],
                "original_name": "지옥",
                "origin_country": ["KR"],
                "poster_path": "/5NYdSAnDVIXePrSG2dznHdiibMk.jpg",
                "vote_count": 130,
                "backdrop_path": "/ikN8ABD9pXHuW4JFqTEHr3ae8rd.jpg",
                "vote_average": 8.0,
                "name": "Hellbound",
                "overview": "Unearthly beings deliver bloody condemnations, sending individuals to hell and giving rise to a religious group founded on the idea of divine justice.", "first_air_date": "2021-11-19", "original_language": "ko", "popularity": 749.812, "media_type": "tv"
            }, {
                "adult": false,
                "backdrop_path": "/pinPGZW5r9SOFNlSLugpdLwvdyD.jpg",
                "id": 765869,
                "genre_ids": [27, 35],
                "original_language": "en",
                "original_title": "Black Friday",
                "poster_path": "/vf9Ex4EwSPlwbva4ZJdljsQQOML.jpg",
                "video": false,
                "vote_average": 5.5,
                "overview": "A group of toy store employees must protect each other from a horde of parasite infected shoppers.", "release_date": "2021-11-19", "vote_count": 22, "title": "Black Friday", "popularity": 91.011, "media_type": "movie"
            },
            {
                "backdrop_path": "/41neXsH222hV2zrsTyw8h7javon.jpg",
                "original_name": "South Park",
                "origin_country": ["US"],
                "original_language": "en",
                "poster_path": "/iiCY2QIGSnmtVkIdjkKAfwDs0KF.jpg",
                "vote_average": 8.3,
                "vote_count": 2661,
                "first_air_date": "1997-08-13",
                "overview": "Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.", "genre_ids": [16, 35], "name": "South Park", "id": 2190, "popularity": 346.518, "media_type": "tv"
            },
            { "overview": "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a Super Hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.", "release_date": "2021-12-15", "adult": false, "backdrop_path": "/vIPIyTJqcgOKgKcExCvTDpLpTYW.jpg", "genre_ids": [28, 12, 878], "vote_count": 0, "original_language": "en", "original_title": "Spider-Man: No Way Home", "poster_path": "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg", "title": "Spider-Man: No Way Home", "video": false, "vote_average": 0.0, "id": 634649, "popularity": 1359.693, "media_type": "movie" }, { "adult": false, "backdrop_path": "/r2GAjd4rNOHJh6i6Y0FntmYuPQW.jpg", "genre_ids": [12, 28, 53], "vote_count": 2127, "original_language": "en", "original_title": "No Time to Die", "id": 370172, "title": "No Time to Die", "video": false, "vote_average": 7.6, "poster_path": "/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg", "overview": "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.", "release_date": "2021-09-29", "popularity": 2900.688, "media_type": "movie" }, { "id": 512195, "overview": "An Interpol-issued Red Notice is a global alert to hunt and capture the world's most wanted. But when a daring heist brings together the FBI's top profiler and two rival criminals, there's no telling what will happen.", "release_date": "2021-11-04", "adult": false, "backdrop_path": "/dK12GIdhGP6NPGFssK2Fh265jyr.jpg", "vote_count": 1349, "genre_ids": [28, 35, 80, 53], "vote_average": 6.9, "original_language": "en", "original_title": "Red Notice", "poster_path": "/wdE6ewaKZHr62bLqCn7A2DiGShm.jpg", "title": "Red Notice", "video": false, "popularity": 4406.23, "media_type": "movie" }, { "adult": false, "backdrop_path": "/w9z6LMvQDa7RaCqVLztnSXkgeAH.jpg", "genre_ids": [16, 35], "id": 874299, "original_language": "en", "original_title": "South Park: Post Covid", "overview": "What happened to the children who lived through the Pandemic? Stan, Kyle, Cartman and Kenny survived but will never be the same Post Covid.", "poster_path": "/abDxPtElhJnLnnJxgMqJ1N2H8yl.jpg", "release_date": "2021-11-25", "title": "South Park: Post Covid", "video": false, "vote_average": 7.0, "vote_count": 3, "popularity": 77.053, "media_type": "movie" }, { "name": "Arcane", "backdrop_path": "/rkB4LyZHo1NHXFEDHl9vSD9r1lI.jpg", "genre_ids": [16, 10765, 10759, 18], "first_air_date": "2021-11-06", "original_language": "en", "original_name": "Arcane", "origin_country": ["US"], "vote_count": 824, "vote_average": 9.2, "poster_path": "/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg", "id": 94605, "overview": "Amid the stark discord of twin cities Piltover and Zaun, two sisters fight on rival sides of a war between magic technologies and clashing convictions.", "popularity": 1377.137, "media_type": "tv" }, { "genre_ids": [12, 16, 35, 10751, 14, 10402], "id": 568124, "original_title": "Encanto", "poster_path": "/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg", "video": false, "vote_average": 7.9, "overview": "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.", "release_date": "2021-11-24", "vote_count": 28, "original_language": "en", "adult": false, "backdrop_path": "/5i3ghCXVLNhewrBjTesMgy4FHT7.jpg", "title": "Encanto", "popularity": 1614.08, "media_type": "movie" }], "total_pages": 1000, "total_results": 20000
    }
} 
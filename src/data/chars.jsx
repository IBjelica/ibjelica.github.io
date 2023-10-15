const Chars  = [
    {
        key: 0,
        char: " ",
        alt: false,
        svg: `<svg height="100%" viewBox="0 0 107 140" fill="none"></svg>`
    },
    {
        key: 1,
        char: "e",
        alt: false,
        svg: `<svg className="letter h-full w-auto max-w-full" width="100%" height="100%" viewBox="0 0 100 143" fill="none">
                <path d="M0.400001 0.199991H99V11.8H14V63.4H93.6V75H14V131.4H100V143H0.400001V0.199991Z" fill="white"/>
              </svg>`
    },
    {
        key: 2,
        char: "e-alt",
        alt: true,
        svg: `<svg className="alt-letter h-full w-auto max-w-full" width="100%" height="100%" viewBox="0 0 150 190" fill="none">
        <path d="M106.1,109.7c-3.2,0-6.6-1.3-10.2-3.6c-3.5-2.6-7.6-5.3-12.3-8.4c-4.6-3.2-9.9-6-16.2-8.4c-6.3-2.6-13.7-3.9-22.3-3.9
        c-10.9,0-19.8,1.1-26.6,3.4c-6.8,2.2-10.2,6-10.2,11.6c0,2.8,0.8,5.3,2.5,7.3c1.8,1.9,4,3.8,6.6,5.2c2.7,1.4,5.6,2.6,8.4,3.6
        c3.1,1,5.8,2.2,8.2,3.4c2.6,1.3,4.7,2.6,6.1,4.1c1.5,1.4,2.2,3.2,1.8,5.5c-0.3,2.6-1.3,4.3-3,5.2c-1.5,0.9-3.5,1.4-5.9,1.4
        c-2.7,0-5.8-0.3-9.3-0.9s-7.1-0.9-10.7-0.9c-5.9,0-11,1.5-15.2,4.3c-4.2,2.8-6.4,7.2-6.4,13c0,5.1,1.7,10.1,5.2,14.8
        c3.6,4.7,8.3,8.8,14.1,12.3c5.8,3.5,12.2,6.3,19.3,8.2c7.2,2.2,14.3,3.2,21.6,3.2c8.3,0,16.7-0.8,25-2.5s15.8-4.1,22.5-7.3
        c6.8-3.1,12.3-6.7,16.4-10.9c4.2-4.2,6.4-8.9,6.4-13.9c0-3.8-1.3-6.9-3.6-9.6c-2.4-2.7-5.6-4.2-9.6-4.6h-1.1c-3.8,0-6.9,1.1-9.6,3.4
        c-2.4,2.3-4.7,5.1-6.6,8.4c-1.8,3.3-3.5,7.1-5.2,11.1c-1.7,4-3.8,7.6-6.1,10.9c-2.3,3.3-5.1,6.1-8.4,8.4c-3.3,2.3-7.6,3.4-12.7,3.4
        s-9.3-1-12.5-3c-3.1-1.8-4.6-4.1-4.6-6.8c0-1.7,0.5-3.1,1.4-4.3c1-1.4,2.2-2.7,3.4-4.1c1.4-1.4,2.5-2.7,3.4-4.1c1-1.5,1.6-3.2,1.6-5
        c0-2.7-1-4.9-3-6.6c-1.9-1.8-4.4-2.7-7.5-2.7c-2.2,0-4.1,0.3-5.9,0.9c-1.7,0.6-3.3,1.4-5,2.3c-1.7,0.8-3.4,1.5-5.2,2
        c-1.7,0.6-3.5,0.9-5.7,0.9c-2.4,0-4.3-0.7-5.7-2c-1.3-1.4-1.8-3.1-1.8-5c0-2.3,0.8-4,2.3-5c1.5-1,3.4-1.8,5.7-2.3
        c2.3-0.6,4.8-1,7.5-1.4c2.7-0.3,5.3-0.8,7.7-1.6c2.4-0.8,4.4-1.8,6.1-3.2c1.8-1.5,3-3.8,3.4-6.6c0.5-2.8-0.1-5.3-1.8-7.3
        c-1.5-1.9-3.3-4-5.5-5.9c-1.9-1.9-3.9-4-5.7-6.1c-1.8-2.2-2.7-4.8-2.7-8c0-2.7,0.7-5,2-6.8c1.4-1.8,3.1-3.3,5.2-4.3
        c2.2-1,4.4-1.7,6.8-2c2.6-0.5,5-0.7,7.3-0.7c6.4,0.3,11.8,1.6,16.4,3.9c4.6,2.2,8.5,4.9,12.1,8.2c3.6,3.2,6.9,6.6,9.8,10.2
        c2.8,3.6,5.8,7.1,8.6,10.2c3.1,3.2,6.3,5.8,9.6,8c3.5,1.9,7.6,3,12.3,3c3.2,0,6-0.6,8.6-1.8c2.6-1.3,4.7-2.7,6.4-4.6
        c1.8-1.8,3.2-3.8,4.1-5.9s1.4-4,1.4-5.7c0-3.3-1-6.1-3.2-8.4c-1.9-2.4-4.9-3.6-8.9-3.6c-2.4,0-4.4,0.5-6.1,1.4
        c-1.7,0.8-3.3,1.7-4.8,2.7c-1.4,0.9-2.8,1.8-4.6,2.7C110.4,109.3,108.4,109.7,106.1,109.7z M97.7,64.2c-3.8,0.1-7.5,0.8-11.1,2
        c-3.5,1.3-7.1,2.5-10.7,3.9c-3.5,1.3-7.1,2.4-10.7,3.4c-3.5,1-7.1,1.6-10.7,1.6c-3.8,0-6.8-0.6-9.1-1.8c-2.3-1.4-3.4-3.5-3.4-6.6
        c0-2.2,0.9-4,2.7-5.7c1.9-1.7,4.1-3.3,6.4-5c2.3-1.7,4.3-3.5,6.1-5.5c1.9-2.2,3-4.7,3-7.5c0-1.9-0.6-3.3-1.8-4.1
        c-1.3-0.9-2.7-1.5-4.6-1.6c-1.8-0.3-3.8-0.5-5.9-0.5s-4.1-0.1-5.9-0.5c-1.8-0.3-3.3-1-4.6-2s-1.8-2.7-1.8-5c0-3.5,1.9-6.3,5.9-8.2
        c4.1-1.9,8.8-3,13.9-3c4.9,0,8.5,1.5,11.1,4.3c2.7,2.8,5.1,6.1,7.1,9.8c1.9,3.5,3.9,6.7,5.7,9.6c1.9,2.8,4.7,4.3,8,4.3
        c1.3,0,2.2-0.1,2.7-0.2c2.6-0.6,4.4-2.2,5.5-4.6c1.3-2.4,1.9-5.2,2.3-8.4c0.5-3.3,0.8-6.8,0.9-10.5c0.1-3.6,0.6-6.9,1.1-10
        c0.6-3.1,1.6-5.6,3-7.5c1.4-2.2,3.5-3.2,6.4-3.2c3.1,0,5.1,1.1,6.1,3.4c1.3,2.2,1.9,4.8,2,8c0.3,3.2,0.5,6.7,0.5,10.7
        c0.1,3.8,0.7,7.3,1.6,10.5c0.9,3.2,2.6,5.9,5,8.2c2.4,2.2,6,3.2,10.9,3.2c2.7,0,5.5-0.5,8.2-1.4c2.8-1,5.5-2.4,7.7-4.1
        c2.3-1.7,4.1-3.6,5.5-5.9c1.5-2.3,2.3-4.7,2.3-7.1c0-3.1-0.8-5.8-2.5-8.4S152,15,148,15c-2.3,0-4.2,0.3-5.9,1.1
        c-1.5,0.8-3,1.7-4.3,2.7c-1.3,0.9-2.4,1.7-3.4,2.5c-1,0.8-2.2,1.1-3.4,1.1c-3.2,0-5.2-1.1-6.1-3.4c-0.9-2.4-1.8-5-2.7-7.7
        c-0.8-2.8-2-5.5-3.9-7.7c-1.8-2.4-5.1-3.6-10-3.6c-4.4,0-7.9,1.5-10.2,4.3c-2.3,2.8-4.2,6.1-5.7,9.8c-1.4,3.5-2.6,6.7-3.9,9.6
        c-1,2.8-2.7,4.3-5,4.3c-2.3,0-4.3-0.6-6.1-1.8c-1.7-1.3-3.5-2.6-5.7-4.1c-1.9-1.5-4.2-2.8-6.8-4.1c-2.4-1.3-5.6-1.8-9.6-1.8
        c-5.6,0-10.8,1-15.5,3c-4.6,1.9-8.5,4.7-11.8,8.2c-3.3,3.3-6,7.3-8,11.8c-1.8,4.6-2.7,9.4-2.7,14.8c0,7.7,2.6,14.2,7.7,19.3
        c5.1,5,12.1,7.5,20.7,7.5c3.3,0,6.9-0.5,10.7-1.4c3.8-1,7.4-2.2,10.9-3.4c3.6-1.3,6.9-2.3,9.8-3.2c2.8-1,5-1.6,6.4-1.6
        c1.8,0,3,0.5,3.4,1.4c0.6,0.8,0.9,1.7,0.9,3s-0.1,2.6-0.5,4.3c-0.1,1.5-0.1,3.1,0,4.6c0.3,4.1,1.6,7.3,3.9,9.6
        c2.3,2.3,5.6,3.4,10,3.4c3.8,0,7.3-1.5,10.5-4.6c3.2-3.1,4.8-7.2,4.8-12.5c0-5.5-1.9-9.4-5.7-12.1C107.1,65.5,102.7,64.2,97.7,64.2z
        " fill="white"/>
      </svg>`
    },
    {
      //Todo: new version of Helvetica G
        key: 3,
        char: "g",
        alt: false,
        svg: `<svg className="letter h-full w-auto max-w-full" width="100%" height="100%" viewBox="0 0 130 149" fill="none">
                <path d="M129.4 146H119.6L117.8 120H117.4C115 125.067 112 129.467 108.4 133.2C104.933 136.8 101.067 139.8 96.8 142.2C92.5333 144.467 87.9333 146.133 83 147.2C78.2 148.267 73.2 148.8 68 148.8C56.8 148.8 46.9333 146.8 38.4 142.8C30 138.667 23 133.2 17.4 126.4C11.8 119.6 7.6 111.733 4.8 102.8C2 93.8667 0.600001 84.4667 0.600001 74.6C0.600001 64.7333 2 55.3333 4.8 46.4C7.6 37.4667 11.8 29.6 17.4 22.8C23 15.8667 30 10.4 38.4 6.4C46.9333 2.26666 56.8 0.199994 68 0.199994C75.4667 0.199994 82.5333 1.19999 89.2 3.19999C95.8667 5.19999 101.8 8.19999 107 12.2C112.2 16.2 116.6 21.1333 120.2 27C123.8 32.8667 126.267 39.7333 127.6 47.6H114C113.6 43.4667 112.2 39.3333 109.8 35.2C107.533 30.9333 104.4 27.0667 100.4 23.6C96.5333 20.1333 91.8667 17.3333 86.4 15.2C80.9333 12.9333 74.8 11.8 68 11.8C58.5333 11.8 50.4 13.6 43.6 17.2C36.8 20.8 31.2 25.6 26.8 31.6C22.5333 37.4667 19.3333 44.1333 17.2 51.6C15.2 59.0667 14.2 66.7333 14.2 74.6C14.2 82.3333 15.2 90 17.2 97.6C19.3333 105.067 22.5333 111.8 26.8 117.8C31.2 123.667 36.8 128.4 43.6 132C50.4 135.6 58.5333 137.4 68 137.4C75.8667 137.4 82.8667 136.133 89 133.6C95.2667 130.933 100.533 127.267 104.8 122.6C109.067 117.933 112.267 112.4 114.4 106C116.533 99.6 117.533 92.6 117.4 85H68.8V73.4H129.4V146Z" fill="white"/>
              </svg>`
    },
    {
        key: 4,
        char: "g-alt",
        alt: true,
        svg: `<svg className="alt-letter h-full w-auto max-w-full" width="100%" height="100%" viewBox="0 0 150 190" fill="none">
        <path className="st0" d="M142.7,97.8H141v-18c0-10.4-2.4-18.1-7.1-23c-4.7-4.8-12.5-7.3-23.3-7.3h-13v-1.5h13c5.3,0,9.7-0.6,13.2-1.7
        c3.5-1.1,6.3-2.6,8.5-4.2c-0.5-0.6-2.3-3-5.1-7c-3-4.1-7.1-8.3-12.5-12.8S102.6,13.6,94.8,10c-7.7-3.6-16.6-5.6-26.6-5.6
        c-10.1,0-19,1.5-26.8,4.4c-7.7,3-14.4,6.8-20,11.8c-5.6,4.8-10.3,10.6-14.1,16.8c-3.6,6.3-6.7,12.8-8.9,19.5s-3.8,13.3-4.8,20
        c-1.1,6.5-1.5,12.5-1.5,18c0,8.9,1.1,18.6,3,29.2c2.1,10.6,5.7,20.4,11.2,29.8c5.4,9.2,12.8,16.9,22.4,23.3
        c9.5,6.2,21.6,9.4,36.3,9.4c10.9,0,20-0.9,27.2-2.9c7.4-1.8,13.3-4.7,17.7-8.3c4.4-3.6,7.6-8.2,9.5-13.5c2-5.3,3-11.3,3-18v-13.3
        c0-3.6-0.2-6.7-0.3-9.2c-0.2-2.6-0.8-4.5-1.8-6.2c-1.1-1.5-2.7-2.7-4.8-3.3c-2.3-0.6-5.3-0.9-9.2-0.9H84.8c-0.3,0-0.5-0.2-0.5-0.5
        v-0.5c0-0.3,0.2-0.5,0.5-0.5h86c0.3,0,0.5,0.2,0.5,0.5v0.5c0,0.3-0.2,0.5-0.5,0.5h-11.5c-3.2,0-5.6,0.3-7.3,0.9
        c-1.7,0.6-3,1.5-3.8,2.7c-0.8,1.2-1.4,2.7-1.5,4.7c-0.2,1.8-0.3,4.2-0.3,7v27.2c-4.2,7-10.1,13-17.4,18.1c-3.2,2.3-6.8,4.5-11,6.8
        c-4.2,2.3-9.1,4.2-14.2,5.9c-5.3,1.7-11.2,3.2-17.7,4.2c-6.5,1.1-13.8,1.7-21.6,1.7c-13.3,0-26-2.1-38.2-6.2
        c-12.2-4.1-23-10.1-32.2-18c-9.2-8-16.6-17.8-22.1-29.8s-8.2-25.5-8.2-41s2.9-29,8.6-40.8S-14.2,32.6-5,24.6c9.4-8,20-13.9,31.7-18
        s23.9-6.2,36.1-6.2c11.6,0,21.9,2.1,30.7,6.2c8.6,4.1,16.2,8.6,22.2,13.8c7.1,6,13.2,12.8,18.1,20.4c2.1-2.1,3.8-5,5.1-8.6
        c1.4-3.6,2-8.3,2-14.2V0h1.7v18c0,10.6,2.4,18.3,7.4,23.1c4.8,4.7,12.5,7.1,23.1,7.1h13v1.5h-13c-10.6,0.2-18.4,2.6-23.3,7.3
        c-4.8,4.7-7.3,12.4-7.3,23C142.7,80,142.7,97.8,142.7,97.8z" fill="white"/>
      </svg>`
    },
    {
        key: 5,
        char: "h",
        alt: false,
        svg: `<svg className="letter h-full w-auto max-w-full" width="100%" height="100%" viewBox="0 0 113 143" fill="none">
                <path d="M0.400001 0.199991H14V62.2H98.8V0.199991H112.4V143H98.8V73.8H14V143H0.400001V0.199991Z" fill="white"/>
              </svg>`
    },
    {
        key: 6,
        char: "h-alt",
        alt: true,
        svg: `<svg className="alt-letter h-full w-auto max-w-full" width="100%" height="100%" viewBox="0 0 150 190" fill="none">
        <path className="st0" d="M180.6,1.8c0,0.6-0.5,1-1.3,1h-16c-3.6,0-6.3,0.5-8.2,1.6c-1.9,1-3.6,2.3-4.5,3.7c-1,1.5-1.6,3.1-1.8,4.9
        c-0.3,1.8-0.3,3.2-0.3,4.7v154.7c0,1.3,0.2,2.6,0.3,4.4c0.3,1.6,0.8,3.2,1.8,4.9c1,1.6,2.4,2.9,4.5,3.9c1.9,1.1,4.7,1.6,8.2,1.6h16
        c0.8,0,1.3,0.3,1.3,1v0.8c0,0.6-0.5,1-1.3,1h-76.5c-0.8,0-1.3-0.3-1.3-1v-0.8c0-0.6,0.5-1,1.3-1h16c3.6,0,6.3-0.5,8.2-1.6
        c1.9-1,3.6-2.4,4.5-3.9c1-1.6,1.6-3.2,1.8-4.9s0.3-3.1,0.3-4.4V91h-28.8c-10,0-17.1,2.3-21.7,6.6s-6.8,11.5-6.8,21.5v15.2h-2.9
        v-15.2c0-10-2.3-17.1-6.8-21.5C62.2,93.3,54.9,91,45.1,91H15.9v81.5c0,1.3,0.2,2.6,0.3,4.4c0.3,1.6,0.8,3.2,1.8,4.9
        c1,1.6,2.4,2.9,4.4,3.9c1.9,1.1,4.7,1.6,8.2,1.6h16.2c0.6,0,1.1,0.3,1.1,1v0.8c0,0.6-0.3,1-1.1,1h-76.5c-0.6,0-1-0.3-1-1v-0.8
        c0-0.6,0.3-1,1-1h16.2c3.6,0,6.3-0.5,8.2-1.6c1.9-1,3.6-2.4,4.5-3.9c1-1.6,1.6-3.2,1.8-4.9c0.3-1.6,0.3-3.1,0.3-4.4V17.6
        c0-1.5-0.2-2.9-0.3-4.7c-0.3-1.8-0.8-3.4-1.8-4.9s-2.4-2.7-4.5-3.7c-1.9-1.1-4.7-1.6-8.2-1.6h-16.2c-0.6,0-1-0.3-1-1V1
        c0-0.6,0.3-1,1-1H47c0.6,0,1.1,0.3,1.1,1v0.8c0,0.6-0.3,1-1.1,1H30.8c-3.6,0-6.3,0.5-8.2,1.6c-1.9,1-3.6,2.3-4.4,3.7
        c-1,1.5-1.6,3.1-1.8,4.9c-0.3,1.8-0.3,3.2-0.3,4.7v70.5h29.1c10.2,0,17.5-2.3,21.8-6.5c4.5-4.4,6.6-11.6,6.6-22V45h2.9v14.7
        c0,10,2.3,17.1,6.8,21.7c4.5,4.5,11.8,6.8,21.7,6.8h28.8V17.6c0-1.5-0.2-2.9-0.3-4.7s-0.8-3.4-1.8-4.9c-1-1.5-2.4-2.7-4.5-3.7
        c-1.9-1.1-4.7-1.6-8.2-1.6h-16c-0.8,0-1.3-0.3-1.3-1V1c0-0.6,0.5-1,1.3-1h76.5c0.8,0,1.3,0.3,1.3,1v0.8H180.6z" fill="white"/>
      </svg>`
    },
    {
        key: 7,
        char: "i",
        alt: false,
        svg: `<svg className="letter h-full w-auto max-w-full" width="100%" height="100%" viewBox="0 0 14 143" fill="none">
                <path d="M0.400001 0.199991H14V143H0.400001V0.199991Z" fill="white"/>
              </svg>`
    },
    {
        key: 8,
        char: "i-alt",
        alt: true,
        svg: `<svg className="alt-letter h-full w-auto max-w-full" width="100%" height="100%" viewBox="0 0 150 190" fill="none">
        <path className="st0" d="M52.1,181.3c4.5,0,8.4-1.6,11.8-5c3.2-3.2,5-7.3,5-11.8V25.5c0-4.7-1.6-8.7-5-12c-3.4-3.2-7.3-5-11.8-5H6
        l33.3,41.5L-21.1,0h76.6c3.7,0,6.8,0.6,9.4,1.9c2.6,1.3,4.5,2.6,5.8,4c1.8,1.9,3.1,4,4.2,6.3c1.3-2.3,2.7-4.4,4.7-6.3
        c1.8-1.5,3.9-2.7,6.6-4C88.7,0.6,92.1,0,96,0h75.1l-60.4,50.2L144,8.7h-46c-4.5,0-8.4,1.6-11.8,5c-3.4,3.2-5,7.3-5,12v138.9
        c0,4.5,1.6,8.4,5,11.8c3.2,3.2,7.3,5,11.8,5h46l-33.3-41.4l60.4,49.9H94.5c-3.7,0-6.8-0.6-9.2-1.9c-2.6-1.3-4.5-2.7-5.8-4.4
        c-1.9-1.8-3.4-3.7-4.5-6c-1.1,2.3-2.6,4.2-4.5,6c-1.8,1.6-3.9,3.1-6.5,4.4c-2.6,1.3-6,1.9-10,1.9h-75.1l60.4-49.9L6,181.4h46V181.3z
        " fill="white"/>
      </svg>`
    },
    {
        key: 9,
        char: "n",
        alt: false,
        svg: `<svg className="letter h-full w-auto max-w-full" width="100%" height="100%" viewBox="0 0 113 143" fill="none">
                <path d="M0.2 0.199991H15.4L98.6 121H99V0.199991H112.6V143H97.4L14.2 22.2H13.8V143H0.2V0.199991Z" fill="white"/>
              </svg>`
    },
    {
        key: 10,
        char: "n-alt",
        alt: true,
        svg: `<svg className="alt-letter h-full w-auto max-w-full" width="100%" height="100%" viewBox="0 0 150 190" fill="none">
        <path className="st0" d="M145.6,173c0,5.7,1.3,9.2,3.7,11.1c2.6,1.8,6.3,2.7,11.3,2.7h5.2c6,0,9.4-2.6,10.5-7.6
        c0.5-2.6-0.2-6.8-1.9-12.3c-1.8-5.7-4.2-11.3-6.9-17.4c-2.7-6-5.7-11.6-8.4-17c-2.7-5.3-4.8-9-6-11.3c0-0.5,0.2-0.8,0.5-1.1
        c0.3-0.3,0.6-0.3,0.8,0h0.3l38,67.2c0,0.2,0.2,0.3,0.3,0.6c0.2,0.3,0.3,0.5,0.3,1c0,0.6-0.5,1-1.6,1h-59.6L13,13.6v156.7
        c0,6.5,1.1,10.8,3.4,13.1c2.3,2.3,6.1,3.4,11.8,3.4h5c0.5,0,0.8,0.5,0.8,1.3v0.8c0,0.6-0.3,1-0.8,1h-49c-1.1,0-1.6-0.3-1.6-1v-0.8
        c0-0.8,0.5-1.3,1.6-1.3h5c5,0,8.7-1.3,11.3-3.7c2.4-2.4,3.7-6.8,3.7-12.8V17c0-5-1-8.6-2.7-10.7c-1.8-1.9-5-3.1-9.5-3.1h-7.9
        c-2.4,0-4.7,0.5-6.6,1.6c-1.9,1-3.2,3.1-3.7,6c-0.5,3.2,0.2,7.8,2.1,13.4s4.2,11.3,7.1,17.1c2.7,5.8,5.7,11.1,8.4,16.2
        c2.7,5,4.7,8.7,5.8,11c0.2,0.5,0,1.1-0.5,1.6c-0.6,0.3-1.1,0.2-1.3-0.5l-38.1-67c0-0.2-0.2-0.3-0.3-0.5s-0.3-0.3-0.3-0.5
        c0-1,0.5-1.6,1.6-1.6h69.3l109.4,159V17c0-5.2-1.1-8.7-3.4-10.7c-2.3-1.9-6.1-2.9-11.8-2.9H117c-1,0-1.6-0.5-1.6-1.6V1
        c0-0.6,0.5-1,1.6-1h48.6c0.6,0,1.1,0.3,1.1,1v0.8c0,1-0.3,1.6-1.1,1.6h-5c-5,0-8.9,1-11.3,2.9c-2.6,1.9-3.7,5.5-3.7,10.7V173z" fill="white"/>
      </svg>`
    },
    {
        key: 11,
        char: "o",
        alt: false,
        svg: `<svg className="letter h-full w-auto max-w-full" width="100%" height="100%" viewBox="0 0 150 190" fill="none">
        <path className="st0" d="M-6.4,59.5C-2.7,48,2.7,38,10,29.1S26.3,13.2,37.1,7.9C47.9,2.6,60.5,0,74.9,0s27,2.6,37.8,7.9
        c10.8,5.3,19.9,12.3,27.1,21.2s12.8,18.9,16.3,30.4c3.7,11.5,5.5,23.4,5.5,35.7c0,12.4-1.8,24.2-5.5,35.7s-9,21.6-16.3,30.4
        c-7.3,8.9-16.3,15.8-27.1,21c-10.8,5.2-23.4,7.8-37.8,7.8s-27-2.6-37.8-7.8c-10.8-5.2-19.9-12.1-27.1-21
        c-7.3-8.9-12.8-18.9-16.3-30.4s-5.5-23.3-5.5-35.7S-10.1,70.8-6.4,59.5z M15.8,122.1c2.4,8.9,6.1,17,11.1,24.1
        c5,7.1,11.6,12.8,19.5,17.1c7.9,4.4,17.4,6.5,28.4,6.5s20.5-2.1,28.4-6.5c7.9-4.4,14.5-10,19.5-17.1c5-7.1,8.7-15.2,11.1-24.1
        c2.4-8.9,3.6-17.9,3.6-27.1c0-9.2-1.1-18.3-3.6-27.1c-2.4-8.9-6.1-17-11.1-24.1c-5.2-7.1-11.6-12.8-19.5-17.1s-17.4-6.5-28.4-6.5
        s-20.5,2.1-28.4,6.5s-14.5,10-19.5,17.1C21.7,50.9,18,59,15.8,67.9c-2.4,8.9-3.6,17.9-3.6,27.1C12.2,104.2,13.5,113.3,15.8,122.1z"
        fill="white"/>
      </svg>`
    },
    {
        key: 12,
        char: "o-alt",
        alt: true,
        svg: `<svg className="alt-letter h-full w-auto max-w-full" width="100%" height="100%" viewBox="0 0 150 190" fill="none">
        <path className="st0" d="M165.3,33.5c4,0,7.8,0.6,11,2.1s6.1,3.4,8.6,5.7c2.4,2.4,4.2,5.2,5.7,8.4c1.3,3.2,2.1,6.6,2.1,10.2
	c0,5.5-1.5,10.3-4.4,15c-2.9,4.5-6,8.6-9.4,12c-4,4-8.7,7.8-13.7,11c-2.6,17.1-7.6,32.5-15,46.1c-3.2,5.8-7.1,11.5-11.6,17
	c-4.5,5.5-9.9,10.5-16.2,14.7c-6.3,4.4-13.4,7.8-21.7,10.5c-8.1,2.6-17.5,3.9-27.8,3.9c-12.8,0-23.3-1.9-31.7-5.8
	c-8.4-3.9-15-8.1-20.1-12.8c-6-5.5-10.5-11.6-13.7-18.6c-9.4-0.5-17.6-2.3-24.9-5.3c-3.1-1.3-6.1-2.9-9.2-4.9s-5.7-4.2-8.1-7
	c-2.4-2.7-4.2-6-5.7-9.7c-1.5-3.7-2.1-7.9-2.1-12.6c0-4.9,0.6-9.4,1.9-13.4c1.3-4,2.9-7.6,5-10.8c2.1-3.2,4.5-6.1,7.3-8.6
	c2.7-2.4,5.5-4.7,8.1-6.5c6.6-4.4,14.1-7.8,22.5-10.2C5,54.7,8.9,46.2,13.7,38.6c2.1-3.2,4.5-6.5,7.3-9.5s6-6,9.4-8.7
	s7.3-5,11.5-6.8c4.2-1.9,8.7-3.1,13.9-3.9c0.5,0,1,0,1.5-0.2s1-0.2,1.5-0.2c2.9,0,5.2,0.3,7,0.8c1,0.2,1.9,0.5,2.7,0.8
	c2.4-2.4,5.2-4.4,8.6-5.7c3.2-1.5,6.8-2.6,10.3-3.2c3.6-0.8,7.1-1.3,10.8-1.6c3.7-0.3,7-0.5,10-0.5c9.5,0.3,17.5,2.3,23.8,5.8
	c6.3,3.6,11.5,7.4,15.4,11.6c4.5,5.2,8.2,10.7,11,16.8C161.1,33.8,163.2,33.5,165.3,33.5z M-36.7,125.2c1.3,3.1,2.9,5.8,5,8.2
	c2.1,2.4,4.4,4.5,7,6.3c2.6,1.8,5.3,3.2,8.1,4.5c6.3,2.7,13.4,4.5,21.7,5.7c-1.9-3.6-3.6-7.4-4.9-11.6c-1.3-3.6-2.6-7.6-3.6-12.3
	s-1.5-9.7-1.5-15.2c0-6,0.3-11.3,0.8-16.2c0.5-4.9,1-8.9,1.5-12.3c0.6-4,1.5-7.6,2.3-10.7c-7.1,1.9-13.4,4.7-19.1,8.4
	c-4.7,3.2-9.1,7.6-13.1,13.1c-4,5.3-6.1,12.5-6.1,21.2C-38.6,118.5-38,122.1-36.7,125.2z M75.2,15.8c1.3,1,2.6,2.1,3.6,3.2
	c0.8,1.1,1.6,2.6,2.4,4.2c0.8,1.6,1.1,3.6,1.1,6c0,5.7-1.5,10.3-4.5,14.2c-3.1,3.9-7,7.1-11.8,9.7c-4.9,2.6-10.2,4.7-16.2,6.3
	c-6,1.6-11.6,2.9-17.3,3.9c-2.9,0.5-5.5,1-7.9,1.5c-2.4,0.5-4.5,0.8-6.3,1.1c-2.3,0.5-4.2,1-5.8,1.3c-1.3,10.2-1.6,20.2-0.8,30.1
	c0.3,4,1,8.4,1.8,12.8c0.8,4.5,2.1,8.9,3.6,13.4c1.5,4.4,3.6,8.6,6,12.8c2.4,4,5.5,7.8,9.1,11.2c8.2-1.9,16.8-4,25.4-6.6
	c7.6-2.3,15.8-4.9,24.7-8.1c8.9-3.2,17.5-7,25.7-11.5c1.8-5,3.1-10.8,4-17.5c1-6.5,2.1-13.1,3.4-19.7c1.3-6.6,2.7-12.9,4.5-18.9
	c1.8-6,4.4-11,7.4-15.2c1.3-1.9,2.7-3.4,3.9-4.7c1.3-1.3,2.3-2.3,3.2-3.2c1.1-0.8,2.3-1.6,3.1-2.3c-3.9-4.9-8.2-9.4-13.3-13.3
	c-4.2-3.2-9.2-6.1-15.2-8.9c-5.8-2.7-12.3-4-19.4-4C85.1,13.6,80.2,14.4,75.2,15.8z M66.9,16.5c-1.8-1.5-4.5-2.1-8.1-2.1
	c-3.6,0-7,0.6-10.2,1.9c-3.2,1.3-6.3,3.1-9.1,5.2c-2.7,2.3-5.3,4.7-7.8,7.4c-2.4,2.7-4.5,5.7-6.3,8.6c-4.4,6.8-8.2,14.6-11.5,23.1
	c10.3-2.6,19.6-5.7,27.8-9.4c3.6-1.5,7-3.2,10.3-5.3c3.2-2.1,6.3-4.4,8.7-6.8c2.6-2.4,4.7-5.2,6.3-8.1s2.4-6.1,2.4-9.5
	C69.5,19.6,68.7,17.9,66.9,16.5z M84.1,157.2c3.4-2.7,7.1-6.5,11.2-11c4-4.7,7.6-10.5,11-17.6c-8.1,3.4-16.3,6.5-24.7,9.4
	c-7.1,2.6-14.9,5-23,7.6c-8.2,2.6-16.2,4.5-23.8,5.8c4,4.2,8.7,7.9,14.2,11.2c4.4,2.9,9.9,5.5,16.2,7.9c6.3,2.4,13.4,3.6,21,3.6
	c7.4,0,14.2-1.1,20.2-3.2s11.5-4.9,16.3-8.2c4.9-3.4,9.1-7.3,12.8-11.8c3.7-4.5,7-9.1,9.7-13.6c6.5-10.7,11.3-23,14.7-36.7
	c-6.8,4-13.4,7.9-19.9,11.5c-2.7,1.5-5.5,3.1-8.4,4.5c-2.9,1.5-5.7,2.9-8.6,4.2s-5.5,2.6-7.9,3.7c-2.4,1.1-4.7,1.9-6.5,2.7
	c-2.6,5.7-5.7,10.8-9.4,15.8c-3.1,4.2-7,8.4-11.5,12.6c-4.5,4.2-10,7.1-16.3,9.1C75.7,162.5,79.9,160.2,84.1,157.2z M149.9,46.9
	c-4.4,2.6-8.4,6-11.8,10c-3.6,4-6.5,8.6-8.9,13.4c-2.4,4.9-4.5,9.4-6.3,13.7c-1.8,4.4-3.1,8.2-3.9,11.6c-1,3.4-1.6,5.7-1.9,6.6
	c-0.6,2.3-1.3,4.4-2.1,6.3c-0.6,2.1-1.3,3.9-1.8,5.7c-0.6,1.9-1.3,3.6-1.8,5.2c12.5-6.5,23.4-13.3,33.1-20.5c4-3.1,8.1-6.3,12.1-9.9
	c4-3.6,7.6-7.3,10.7-11c3.1-3.9,5.7-7.8,7.4-11.6c1.9-4,2.7-8.1,2.7-12.1c0-3.1-1.5-5.7-4.5-7.8c-2.9-2.1-5.8-3.2-8.6-3.2
	C159.3,42.9,154.4,44.1,149.9,46.9z" fill="white"/>
</svg>`
    },
    {
        key: 13,
        char: "r",
        alt: false,
        svg: `<svg className="letter h-full w-auto max-w-full" width="100%" height="100%" viewBox="0 0 113 143" fill="none">
                <path d="M14 68H64.8C68.9333 68 72.8667 67.4 76.6 66.2C80.3333 64.8667 83.6 63 86.4 60.6C89.2 58.2 91.4 55.3333 93 52C94.7333 48.5333 95.6 44.6 95.6 40.2C95.6 31.4 93.0667 24.4667 88 19.4C82.9333 14.3333 75.2 11.8 64.8 11.8H14V68ZM0.400001 0.199991H65.8C71.6667 0.199991 77.2 0.933327 82.4 2.4C87.7333 3.86666 92.3333 6.13333 96.2 9.19999C100.2 12.1333 103.333 16 105.6 20.8C108 25.4667 109.2 31 109.2 37.4C109.2 46.4667 106.867 54.3333 102.2 61C97.5333 67.6667 90.6 71.9333 81.4 73.8V74.2C86.0667 74.8667 89.9333 76.1333 93 78C96.0667 79.7333 98.5333 82 100.4 84.8C102.4 87.6 103.8 90.8667 104.6 94.6C105.533 98.2 106.133 102.133 106.4 106.4C106.533 108.8 106.667 111.733 106.8 115.2C106.933 118.667 107.2 122.2 107.6 125.8C108 129.267 108.6 132.6 109.4 135.8C110.333 138.867 111.533 141.267 113 143H98C97.2 141.667 96.5333 140.067 96 138.2C95.6 136.2 95.2667 134.2 95 132.2C94.8667 130.067 94.7333 128 94.6 126C94.4667 124 94.3333 122.267 94.2 120.8C93.9333 115.733 93.4667 110.733 92.8 105.8C92.2667 100.733 91 96.2667 89 92.4C87.1333 88.4 84.3333 85.2 80.6 82.8C77 80.4 72 79.3333 65.6 79.6H14V143H0.400001V0.199991Z" fill="white"/>
              </svg>`
    },
    {
        key: 14,
        char: "r-alt",
        alt: true,
        svg: `<svg className="alt-letter h-full w-auto max-w-full" width="100%" height="100%" viewBox="0 0 150 190" fill="none">
        <path className="st0" d="M82.8,179.3c2.2,1.2,4.6,1.8,7.2,1.8c3.9,0,7.9-0.8,11.9-2.6c4-1.8,8-4.2,11.9-7.1c3.9-2.9,7.8-6.2,11.5-9.8
        c3.7-3.7,7.2-7.5,10.5-11.4c7.9-9,15.4-19.3,22.6-30.8c-6.7,13.2-13.9,24.9-21.5,35.3c-3.2,4.4-6.8,8.7-10.8,12.9
        c-3.9,4.2-8,7.9-12.5,11.2c-4.3,3.3-8.9,6-13.4,8c-4.6,2.1-9.4,3-14.3,3c-5.8,0-10.3-1.4-13.6-4.2c-3.2-2.8-4.9-6.5-4.9-11.5
        c0-2.9,1.4-6.1,4.2-9.4c2.8-3.5,6-6.8,9.3-10.3c3.5-3.5,6.5-6.7,9.3-9.7c2.8-3,4.2-5.7,4.2-7.6c-0.3-3.6-1.8-5.8-4.2-6.8
        c-2.5-1-5.1-1.4-8-1.4c-2.2,0-5.1,0.3-8.9,0.8c-3.7,0.6-7.6,1.2-11.8,1.9c-4.2,0.7-8.3,1.2-12.5,1.8s-7.9,0.8-11.1,0.8
        c-4.4,0-7.9-1.4-10.5-4c-2.5-2.6-3.9-5.5-3.9-8.9c0-3.9,1.5-7.2,4.7-10c3.2-2.8,7.2-5,12.3-6.8c5-1.8,10.7-3.2,16.8-4.3
        c6.1-1.1,12.2-1.9,18.2-2.6c6-0.7,11.4-1.2,16.4-1.7c5-0.4,8.7-0.8,11.5-1.4c10.5-1.9,19.8-4.6,27.7-8.2c7.9-3.6,14.6-7.5,19.8-11.9
        c5.3-4.3,9.3-9,11.9-13.9c2.6-4.9,4-9.4,4-13.7c0-11.2-3.2-20.4-9.6-27.3S141.8,9.6,129.8,9.6c-5.3,0-10.4,0.7-15.4,2.4
        c-5,1.5-9.8,4.3-14.8,8.2c-5,3.9-10,9.1-15.1,15.8c-5.3,6.5-10.8,14.8-16.8,24.9c-2.2,3.7-4.9,7.9-8,12.5C56.4,77.9,53,82.2,49,86.1
        c-3.9,3.9-8.2,7.2-12.6,10c-4.6,2.8-9.3,4.2-14.3,4.2c-0.8,3.5-1.8,6.8-2.8,10.3c-0.7,2.9-1.4,6-2.2,9.1c-0.7,3.2-1.5,6-2.2,8.3
        c-0.3,1.5-1,4-1.8,7.5c-0.8,3.5-1.9,7.5-3,11.8c-1.2,4.3-2.6,8.7-4.4,13.3c-1.8,4.6-3.7,8.7-6,12.5s-4.7,6.8-7.5,9.3
        c-2.8,2.4-5.7,3.6-9,3.6c-2.8,0-5.1-1.1-7.2-3.2c-2.1-2.1-3-5.7-3-10.7s1.2-9.7,3.9-14.4c2.5-4.7,5.4-8.9,8.7-12.5
        c3.6-4.2,7.6-8,12.3-11.8c-3,2.9-5.7,5.8-7.9,9c-2.1,2.8-3.9,5.7-5.7,9c-1.7,3.2-2.5,6.5-2.5,9.7c0,2.9,0.6,5,1.7,6.2
        c1.1,1.2,2.5,1.9,4,1.9c1.9,0,3.6-1.1,5.3-3.2c1.7-2.1,3-4.6,4.3-7.5c1.2-2.8,2.4-5.5,3.3-8.2c1-2.6,1.5-4.6,1.9-5.8
        c0.3-1.2,1.2-4.2,2.8-8.9c1.5-4.7,3-9.7,4.6-15.2c1.9-6.4,4-13.2,6.4-20.8c-3.7-0.8-7.1-2.2-10-4.2c-2.5-1.7-4.9-4-7.1-7.1
        c-2.1-2.9-3.2-6.9-3.2-11.9c0.1-6.4,2.2-11.8,6-16.5c3.9-4.7,8-8.6,12.5-11.6c5.3-3.7,11.2-6.9,17.9-9.4c1.2-6.5,2.9-12.2,5.1-17.2
        c1.9-4.4,4.2-8.5,7.1-11.9c2.8-3.5,6.2-5.3,10.4-5.3c3.2,0,5.8,1,7.8,2.8c1.9,1.9,2.9,4.7,2.9,8.5c0,4.4-1.5,8.5-4.4,11.9
        c-3,3.5-6.2,6.4-9.8,8.9c-4.3,2.8-9.1,5.3-14.6,7.5L24.4,91.9c3.2,0,6.5-1,9.8-2.9c3.3-1.9,6.5-4.6,9.7-7.6c3.2-3.2,6.1-6.5,9-10.3
        c2.8-3.6,5.4-7.2,7.6-10.8c2.4-3.5,4.3-6.5,5.8-9.3c1.5-2.6,2.6-4.4,3.3-5.5c1-1.5,2.9-4.7,5.8-9.6c2.8-4.9,6.7-10,11.6-15.4
        s10.9-10.1,18.2-14.3S120.9,0,130.5,0c5.1,0,10.4,0.7,15.9,2.2c5.4,1.5,10.4,3.9,15,7.3s8.3,8,11.2,14S177,36.9,177,46
        c0,9.4-2.4,17.3-7.2,23.8c-4.7,6.5-10.8,11.8-17.9,15.9c-7.2,4.2-15,7.5-23.3,9.8c-8.3,2.4-16.1,4.2-23.3,5.4
        c-2.8,0.6-6.4,1-10.9,1.2c-4.6,0.3-9.6,0.8-14.8,1.2c-5.3,0.6-10.7,1.2-15.9,2.1c-5.4,0.8-10.3,1.9-14.4,3.2
        c-4.3,1.2-7.8,2.9-10.5,4.7c-2.8,1.9-4.2,4.2-4.2,6.9c0,1.5,0.4,2.8,1.4,3.7c1,1,2.1,1.7,3.5,2.1c1.4,0.4,2.8,0.7,4.3,0.8
        c1.5,0.1,2.9,0.1,4.2,0.1c2.5,0,5.8-0.3,9.6-0.8c3.9-0.6,7.9-1.2,12.1-2.1c4.2-0.7,8.5-1.4,12.6-2.1c4.3-0.6,8.2-0.8,11.8-0.8
        c3.2,0,6.1,1,8.6,3c2.5,2.1,3.7,4.9,3.7,8.5c0,2.9-1.4,6.1-4.2,9.4c-2.8,3.5-5.8,6.9-9.1,10.5c-3.3,3.6-6.4,7.1-9.3,10.7
        c-2.8,3.5-4.2,6.8-4.2,9.8C79.5,176,80.6,178.1,82.8,179.3z M5.6,84.4c1.5,2.1,3.2,3.7,5.1,4.7c2.2,1.2,4.7,2.1,7.5,2.5l12.1-44.8
        c-5,2.1-9.4,4.6-13.3,7.5c-3.5,2.4-6.5,5.4-9.3,9.1c-2.8,3.6-4.3,7.9-4.3,12.6C3.2,79.5,4.1,82.3,5.6,84.4z M45.2,20.1
        c-1.5,2.1-2.8,4.3-3.9,6.9c-1.2,2.9-2.2,6.2-3,10c3-1.4,5.8-2.9,8.2-4.6c1.9-1.4,3.7-3,5.4-4.9c1.7-1.9,2.5-3.9,2.5-5.8
        c0-1.4-0.4-2.5-1.1-3.3c-0.8-0.8-1.8-1.2-2.9-1.2C48.4,17,46.7,18,45.2,20.1z" fill="white"/>
      </svg>`
    },
    {
        key: 15,
        char: "s",
        alt: false,
        svg: `<svg className="letter h-full w-auto max-w-full" width="100%" height="100%" viewBox="0 0 113 149" fill="none">
                <path d="M14.8 99C14.6667 106.333 15.8 112.467 18.2 117.4C20.6 122.333 23.8667 126.267 28 129.2C32.2667 132.133 37.2667 134.267 43 135.6C48.7333 136.8 54.8667 137.4 61.4 137.4C65.1333 137.4 69.2 136.867 73.6 135.8C78 134.733 82.0667 133.067 85.8 130.8C89.6667 128.4 92.8667 125.4 95.4 121.8C97.9333 118.067 99.2 113.6 99.2 108.4C99.2 104.4 98.2667 100.933 96.4 98C94.6667 95.0667 92.3333 92.6 89.4 90.6C86.6 88.6 83.4667 87 80 85.8C76.5333 84.4667 73.1333 83.4 69.8 82.6L38 74.8C33.8667 73.7333 29.8 72.4 25.8 70.8C21.9333 69.2 18.5333 67.0667 15.6 64.4C12.6667 61.7333 10.2667 58.4667 8.4 54.6C6.66667 50.7333 5.8 46 5.8 40.4C5.8 36.9333 6.46667 32.8667 7.8 28.2C9.13333 23.5333 11.6 19.1333 15.2 15C18.9333 10.8667 24 7.39999 30.4 4.6C36.8 1.66666 45 0.199994 55 0.199994C62.0667 0.199994 68.8 1.13333 75.2 2.99999C81.6 4.86666 87.2 7.66666 92 11.4C96.8 15.1333 100.6 19.8 103.4 25.4C106.333 30.8667 107.8 37.2667 107.8 44.6H94.2C93.9333 39.1333 92.6667 34.4 90.4 30.4C88.2667 26.2667 85.4 22.8667 81.8 20.2C78.3333 17.4 74.2667 15.3333 69.6 14C65.0667 12.5333 60.2667 11.8 55.2 11.8C50.5333 11.8 46 12.3333 41.6 13.4C37.3333 14.3333 33.5333 15.9333 30.2 18.2C27 20.3333 24.4 23.2 22.4 26.8C20.4 30.4 19.4 34.8667 19.4 40.2C19.4 43.5333 19.9333 46.4667 21 49C22.2 51.4 23.8 53.4667 25.8 55.2C27.8 56.9333 30.0667 58.3333 32.6 59.4C35.2667 60.4667 38.0667 61.3333 41 62L75.8 70.6C80.8667 71.9333 85.6 73.6 90 75.6C94.5333 77.4667 98.4667 79.8667 101.8 82.8C105.267 85.6 107.933 89.0667 109.8 93.2C111.8 97.3333 112.8 102.333 112.8 108.2C112.8 109.8 112.6 111.933 112.2 114.6C111.933 117.267 111.133 120.133 109.8 123.2C108.6 126.133 106.8 129.133 104.4 132.2C102.133 135.267 98.9333 138.067 94.8 140.6C90.8 143 85.8 144.933 79.8 146.4C73.8 148 66.6 148.8 58.2 148.8C49.8 148.8 42 147.867 34.8 146C27.6 144 21.4667 141 16.4 137C11.3333 133 7.4 127.867 4.6 121.6C1.93333 115.333 0.8 107.8 1.2 99H14.8Z" fill="white"/>
              </svg>`
    },
    {
        key: 16,
        char: "s-alt",
        alt: true,
        svg: `<svg className="alt-letter h-full w-auto max-w-full" width="100%" height="100%" viewBox="0 0 150 190" fill="none">
        <path className="st0" d="M105.3,84c3.7-1,7.6-2,11.5-3.2c3.9-1.1,8.1-2.1,12.2-3.2c4.3-1,8.6-1.4,13.1-1.4c7.2,0,13.4,1.9,18.3,5.8
        c4.9,3.9,7.4,9.2,7.4,16.2c0,4.3-1,8.2-3,11.5c-2,3.3-4.7,6.2-7.8,8.6s-6.8,4.4-11,6.1c-4,1.6-8.3,3-12.6,4
        c-4.7,1.1-9.2,1.9-13.6,2.3c-4.4,0.4-8.3,0.8-11.9,1.3c-3.4,0.4-6.3,1-8.6,1.8s-3.5,2.1-3.9,4c-0.5,2.8,0.6,4.9,3.5,6.4
        c2.8,1.5,6.1,3,9.6,4.5c3.7,1.5,6.9,3.4,10.1,5.7c3.2,2.3,4.7,5.4,4.7,9.6c0,3.9-1.8,7.4-5.3,10.6c-3.5,3.2-7.8,5.9-13,8.3
        c-5.2,2.3-10.6,4-16.3,5.3c-5.7,1.3-10.7,1.8-15,1.8c-4.2,0-9.3-0.5-15.5-1.4c-6.2-0.9-12.8-2.4-19.6-4.3
        c-6.8-1.9-13.6-4.3-20.3-7.2s-12.9-6.2-18.2-10c-5.4-3.8-9.7-8.1-13.1-12.9s-5-10.1-5-15.7c0-3.9,0.6-7.1,1.9-9.7
        c1.3-2.7,2.9-4.8,4.9-6.6s4.3-2.9,6.8-3.7c2.5-0.8,5-1.1,7.4-1.1c4.8,0,8.7,1.8,11.9,5.2c3,3.4,5.6,7.6,7.6,12.1
        c2,4.7,3.7,9.5,5,14.4c1.4,4.9,2.8,8.7,4.2,11.5c1.6,2.9,3.7,5.8,6.1,8.7c2.4,2.9,5.4,5.6,9,7.8s7.6,4.3,12.2,5.8
        c4.7,1.5,10,2.3,15.9,2.3c1.3,0,3.3-0.1,6.2-0.5c2.8-0.4,5.8-0.8,9.2-1.4c3.3-0.6,6.7-1.5,10.2-2.5c3.5-1,6.8-2.4,9.7-3.9
        c3-1.6,5.4-3.5,7.2-5.7c1.9-2.1,2.8-4.7,2.8-7.3c0-2.3-1.4-4-4.3-5.6c-2.9-1.4-6.6-2.8-10.9-4c-4.3-1.3-9.1-2.5-14.3-3.8
        c-5.2-1.3-9.8-2.7-14.3-4.4c-4.3-1.8-8-3.9-10.9-6.3s-4.3-5.4-4.3-9.2c0-2.1,0.6-3.9,1.8-5.3c1.3-1.4,2.8-2.7,4.7-3.7
        c1.9-1,3.9-1.6,6.2-2.1c2.1-0.5,4.2-0.8,6.2-0.8c2,0,5,0,9.5,0.1c4.4,0.1,9.2,0.3,14.3,0.4c5,0.1,10,0.3,14.6,0.4
        c4.8,0.1,8.3,0.1,10.7,0.1c4.2,0,8.3-0.4,12.5-1.3c4.2-0.8,8-2,11.4-3.8c3.4-1.8,6.2-3.8,8.3-6.4c2.1-2.5,3.3-5.7,3.3-9.2
        c0-4.7-1.8-8.5-5.3-11.4c-3.5-2.9-8.7-4.3-15.4-4.3c-7.2,0-15.1,1.6-23.6,4.8c-8.5,3.2-16.9,6.7-25.2,10.6s-16.3,7.3-23.6,10.6
        c-7.3,3.2-13.6,4.8-18.8,4.8c-2.9,0-5.3-0.8-7.2-2.4c-1.9-1.6-2.9-3.9-2.9-6.7c0-3,1.1-5.9,3.3-8.7c2.1-2.8,4.9-5.4,8.2-8
        s6.8-5,10.7-7.4s7.4-4.7,10.7-6.8c3.3-2.1,6.1-4.3,8.2-6.3c2.1-2,3.3-3.9,3.3-5.7c0-0.8-0.4-1.8-1.1-3c-0.8-1.3-2.5-1.8-5.4-1.8
        c-5.3,0-10.1,1.8-14.5,5.4c-4.3,3.7-8.7,7.6-13.1,12c-4.4,4.4-9.2,8.5-14.3,12c-5,3.7-11.1,5.4-17.9,5.4c-6.1,0-11.4-1.4-15.8-4.3
        c-4.4-2.9-8.1-6.4-11-10.7s-5-8.7-6.6-13.5c-1.4-4.8-2.1-9.1-2.1-12.9c0-16.3,4.4-28.8,13.1-37.6S18.7,0,33.2,0
        C38.9,0,43.5,0.9,47,2.5c3.5,1.6,6.6,3.5,9,5.6c2.4,2,4.7,3.9,6.7,5.6s4.2,2.7,6.7,2.8h0.5c2.4,0,4.2-0.8,5.2-2.1c1-1.4,2-3,2.9-4.7
        c0.9-1.6,1.9-3.3,3.2-4.7s3.2-2.1,5.9-2.1c3,0,6.9,1,11.6,3c4.7,2,9.2,4.8,13.5,8.2s8.1,7.4,11.1,11.9c3,4.5,4.5,9.2,4.5,14.3
        c0,4.2-1,7.7-3.2,10.6c-2.1,2.9-4.9,4.3-8.7,4.3c-4,0-6.9-1.1-8.8-3.5c-1.9-2.3-3.2-5.2-3.8-8.5c-0.6-3.3-1-6.7-1-10.4
        s-0.4-6.8-1-9.5c-1.1-4.8-2.9-9-5.3-12.5c-2.4-3.5-5.4-5.3-9.1-5.3c-2.3,0-3.7,0.8-4.3,2.4c-0.6,1.6-0.9,3.7-0.6,6.1s0.6,5,1.3,7.8
        c0.5,2.8,0.9,5.6,1,8.2c0.1,2.7-0.3,4.9-1,6.9c-0.8,2-2.4,3.3-4.9,4c-1.3,0.4-2.3,0.5-2.9,0.5c-2.8,0-4.9-1-6.7-2.9
        c-1.8-1.9-3.4-4.3-4.9-7.1c-1.5-2.8-3-5.8-4.5-9.2c-1.5-3.3-3.3-6.3-5.4-9.2c-2.1-2.8-4.7-5.2-7.7-7.1C43.1,4,39.3,3,34.7,3
        c-5.3,0-9.6,1-13,3s-5,4.8-5,8.6c0,3,1.5,5.2,4.5,6.4s6.4,2.3,10,3c3.7,0.8,6.9,1.8,10,3c3,1.3,4.5,3.3,4.5,6.4c0,3-1.8,5.8-5.2,8.2
        c-3.4,2.4-7.3,4.8-11.5,7.2s-8,5-11.5,7.8c-3.4,2.8-5.2,6.3-5.2,10.5c0,3.4,1.1,5.9,3.4,7.6c2.3,1.6,5,2.5,8.5,2.5
        c6.9,0,12.6-1.3,17.2-3.7s8.8-5,12.8-7.8c3.9-2.8,8-5.4,12.1-7.8c4.2-2.4,9.2-3.7,15.1-3.7c1.9,0,4,0.5,6.3,1.5
        c2.3,1,3.4,3.3,3.4,6.7c0,1.4-0.3,2.8-0.9,3.9c-0.6,1.1-1.1,2.3-1.6,3.5C88,71.3,87.5,72.6,87,74c-0.6,1.4-0.9,3-0.9,4.9
        c0,2.1,0.8,3.8,2.4,4.9c1.6,1.3,3.7,1.8,6.1,1.8C98,85.5,101.5,85,105.3,84z" fill="white"/>
      </svg>`
    },
    {
        key: 17,
        char: "t",
        alt: false,
        svg: `<svg className="letter h-full w-auto max-w-full" width="100%" height="100%" viewBox="0 0 114 143" fill="none">
                <path d="M0.2 0.199991H113.2V11.8H63.4V143H49.8V11.8H0.2V0.199991Z" fill="white"/>
              </svg>`
    },
    {
        key: 18,
        char: "t-alt",
        alt: true,
        svg: `<svg className="alt-letter h-full w-auto max-w-full" width="100%" height="100%" viewBox="0 0 150 190" fill="none">
        <path className="st0" d="M35.9,137.9c-2.7,6.4-5.7,12.9-8.7,19.2c-3.1,6.3-6.3,11.8-9.6,16.6c-3.4,4.8-6.7,8.7-10.3,11.8
        c-3.6,3.1-7.2,4.5-10.8,4.5c-5.4,0-9.4-1.6-12.1-4.8c-2.7-3.3-4.5-6.9-5.4-11.4c-1.2-6.1-0.7-12.7,0.9-19.8
        c1.9-6.9,4.6-13.9,8.4-20.8c3.7-6.9,8.2-13.6,13.6-20.1s10.8-12.3,16.5-17.5c5.7-5.2,11.5-9.6,17.2-13.2s11.1-5.8,15.9-6.7
        c2.1-4.8,3.9-9.4,5.7-13.6c1.8-3.6,3.4-7.2,5.1-10.6c1.6-3.6,2.8-6,3.7-7.6c1.2-1.9,2.5-3.9,4.2-6.1c1.6-2.2,3.3-4.2,4.6-6.1
        c1.9-2.2,3.7-4.3,5.7-6.4c-9.1-2.8-18.3-5.5-27.5-7.9c-7.9-1.9-16.3-3.6-25.5-5.4C18.4,10.2,10,9.4,2.4,9.4c-0.9,0-2.1,0-3.1,0
        c-0.9,0-1.9,0.1-2.7,0.3c-4,0.3-5.8,1.8-5.4,4.3c0.3,1.3,1.5,2.4,3.3,3.1s3.7,1.3,5.8,1.8s3.9,1.2,5.7,2.1c1.8,0.7,2.7,2.2,3.1,4
        c0.4,2.7-0.6,5.1-3.4,6.7c-2.7,1.8-6,3.6-9.4,5.2s-6.6,3.4-9.6,5.2c-2.8,1.8-4,4-3.6,6.4c0.3,1.8,1.2,3.1,2.1,4
        c1.2,0.9,2.4,1.8,3.9,2.2s2.8,0.7,4.3,0.9c1.5,0.1,2.7,0.3,3.7,0.3c7.8,0,14.4-1.5,19.9-4.3c5.5-2.8,10.2-6.1,13.9-9.6
        c4.3-4,8.2-8.7,11.4-13.9c-2.4,6.9-6.1,13.3-11.1,18.9c-4.2,4.8-10,9.3-17.5,13.2c-7.3,3.9-16.8,6-28.4,6c-6.3,0-11.7-1.5-15.9-4.2
        c-4.2-2.5-6.3-6.1-6.3-10.5s1.8-7.8,5.2-10.2c3.4-2.2,7.2-4.2,11.4-5.8c4-1.6,7.8-2.8,11.2-4s4.8-2.5,4.5-4.2
        c-0.3-1.9-1.6-3.1-3.7-3.4c-2.1-0.4-4.5-0.7-7.2-1.2c-2.5-0.3-5.1-1.2-7.3-2.1c-2.2-1.2-3.7-3.4-4.2-6.7c-0.6-3.6,0.7-6.4,4.3-8.4
        c3.6-2.1,7.8-3.3,12.3-3.6c1.2-0.1,2.4-0.3,3.6-0.3s2.4,0,3.6,0C7.2,1.8,17.4,2.7,28,4.5s20.1,3.7,28.7,5.8c9.9,2.5,19.6,5.5,29,8.7
        c4.6-3.6,10-6.7,16.2-9.7c5.2-2.4,11.4-4.5,18.6-6.4C127.9,0.9,136,0,144.9,0c5.8,0,11.4,0.3,16.3,1.2c5.1,0.7,9.4,1.9,13.2,3.4
        s6.6,3.4,8.8,5.5s3.4,4.6,3.4,7.6c0.1,5.2-2.4,9.4-7.6,12.7s-14.2,5.1-26.8,5.1c-9.3,0-17.8-0.4-25.8-1.3
        c-7.9-0.9-14.7-1.8-20.7-2.7c-6.7-1.2-13.2-2.5-18.9-4c-2.8,2.2-5.8,5.5-9.1,9.7c-2.7,3.4-5.7,8.2-9.1,14.2
        c-3.3,6.1-6.6,13.8-10,23.4c5.2,0.1,9.9,0.9,14.4,2.2c3.6,1.2,7.2,3.1,10.3,5.7c3.4,2.5,5.5,6.3,6.3,11.1c0.6,3.6,0.6,6.9-0.1,10
        c-0.7,3.1-1.9,6-3.6,8.4c-1.6,2.5-3.6,4.8-6,7.2c-2.2,2.1-4.6,4-7.3,5.8c-6,3.7-12.9,6.9-21.1,9.6c5.8-3.1,11.1-6.3,15.4-9.7
        c1.9-1.6,3.7-3.3,5.5-4.8c1.8-1.8,3.4-3.6,4.6-5.5c1.2-1.9,2.2-4,2.7-6c0.6-2.1,0.7-4,0.3-6.1c-0.6-3.4-1.8-6.1-3.3-8.4
        c-1.5-2.1-3.3-3.7-5.2-5.1c-1.9-1.2-4-1.9-6-2.4c-2.1-0.4-3.9-0.6-5.7-0.6c-0.7,0-1.6,0-2.4,0.1c-0.7,0.1-1.5,0.1-2.1,0.1
        c-0.6,0.1-1.3,0.3-1.8,0.4C48.4,105.4,42.2,122.8,35.9,137.9z M36.2,92.5c-4,2.5-8.2,5.8-12.4,9.7s-8.5,8.2-12.7,13.2
        S3.2,125.3,0,130.3c-3.3,5.1-5.7,10-7.3,15.1c-1.8,5.1-2.2,9.6-1.5,13.6c0.4,2.8,1.9,5.2,4.2,6.7s4.6,2.4,7.2,2.4s4.8-1.2,7.5-3.4
        c2.5-2.2,5.1-5.4,7.6-9.1c2.4-3.7,4.8-8.1,7.3-12.7c2.4-4.8,4.6-9.7,6.9-14.5c5.1-11.7,9.9-24.9,14.5-39.8
        C43.7,88.5,40.3,89.8,36.2,92.5z M159.8,10c-3.9-2.1-9.7-3.1-17.5-3.1c-6.7,0-13.2,0.7-18.9,2.1c-5.8,1.5-10.8,3.1-15.3,5.1
        c-5.1,2.1-9.6,4.3-13.6,7.2c8.1,2.4,16.3,4,24.9,5.1s17.1,1.5,25.5,1.5c2.5,0,5.2-0.1,7.8-0.4c2.5-0.3,5.1-0.9,7.2-1.6
        s3.9-1.8,5.2-3.3c1.3-1.3,1.8-3.1,1.5-5.2C165.9,14.5,163.7,12,159.8,10z" fill="white"/>
      </svg>`
    },
]
  
export default Chars;
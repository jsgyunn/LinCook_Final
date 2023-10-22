import React from 'react';


export default function TeamCard() {
    return (

        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
            <div className="text-left pb-12 ml-5">
                <h2 className="text-black font-bold text-3xl md:text-3xl lg:text-4xl font-heading">
                    함께한 사람들
                </h2>
                <h1 className="font-semi-bold md:text-lg text-black mt-4">
                    우리 팀은 협력의 힘과 다양성의 가치를 중요시 여기는 팀 입니다. <br />각기 다른 배경과 역할을 가진 우리 팀원들을 소개합니다.
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        <img className="object-center object-cover h-auto w-full"
                            src="https://lh3.googleusercontent.com/fife/AK0iWDzhDRCZJOifawzSNNaI8sMKPPt2Gao2ESbnloJbBYVBnFc71NvC5OrW4yoSYEZ4XOM5zkqTVtwj_XYqP9rG7jz-kwpsDKI3qSULU9ANCnb6eyI_NspMFZPeAEykVHi9Zjcze6FmkqzuPxXylIFMu3KFDJY9J3oX2M3JyMbm4Cmj1nG4h9dUYkOKSkIavn7Hkj2peP-1dKEgO4WI3vrDu9BJL8AF4UtQMjl1nMxGdRpKOHKLonY00MiphVBFkixfM5-tilFn2ix4dP1dobprE1yLVWm7L0Lb8J45bF4vonI_xTFJnv5TtOeKWSmw1M26csyU7kXHU4Cj428zSb_a4g_WXrly4pNfRR5MWK76en-7vFC_jw5K01bRQvGajcZW9mYAAtEPMJSDfI-LVZtz4Qe73_OjcWOcD778NVBXWucuMxpftxwmVIZhUF0VcuonsoeingKiUIgkNZ1lEzV6lr-TvoQFugSLEUalKUuhXXeOMllJwuVqTRqhqwEghJF7iVvmd7OOTJYPOiS-PueLKKZMB21xM4ndKib7qaGhDwhuyErdckTl5lKCbcZXBB1xWZ0eFUHK7TBE9oB3_auLabbxS8y9MMbQuyzvw00LP3tRFY3pd1iJPDlAJ9vzFkxlVvnOOhKxsIXvTKJV8KGviN33bIoWi1VvxnZkYFI3kJvMY0vX2-lX4kFoMUiTDEfMEHVdV4vFxORi3_-6LQQw5OuH2_TCO8a2DJEjVqKYjUwqwYaPEEMg2xXK5sz28AwnqdC_nMZpa8BrvLoohzI8YSFXpedS_mOfbtiJTEEernenWCFwZHGD-QNS5QCF164rjFzgRITf8bY_8p7tGw5QX_Mgj8Cco-mvuU6oP_csyBnodZ9X6PENdM3vryQ3UIq13J5xGe0SZoyKbGN6CNBjgVUTqJzD1WDv6A7IRQilkR4OBYEpGm4jGYUV8znOy2eU2t6ElItKRuz9Romzly12Yi5e30PmqyBvmbcUgnRvFm-ByF4E8UGSMIbOzMD45PEk3ppmiZOTu8vOmwJrrwLADxBnx1-BhT9zc-0qoZp9URamm5_ViL97_7Jrk_XQ9TIa1DB_2tvRbGYcQJKVStA8eYF9OED4221ChPK4rOm8-_VTmJJZAuXvKH3tqJzwmeKwCbgnPVgcibqYvWtz_cE3di7l3LXwyAmVQYebiRPSGBAkdlhQb4VmT8CGeGzRtVg2uxIOOJqN-fjtqVYUAz_fHUYT7tI2RfQYNII1VOeaVWhCt9Ws_T2EbBK2FDej9MV6a10GJvGPLGFyjakXq7JwTuPiAqQ3WmZtsxUFcVBQ3K_mV89hCp4mcc2wS3HlyY2DCIG9646A_OVPbdIP7rlS5wOE4aDDfaZmBV65ml4tZlaiQZaGABeRmeNAe-bLjKklUknhiSPo-g7DaWyf5SUOPPH4NzF1Tq392R6QDh0AHzozyf3fLC2yxlY3sm_IIdraYLw3CdqCI6gYHTLuuhghhLtHM4iVESP1jQ8McZnEi19umCdUFN2BHzkyPkO1FcYrrQEQEMk1YJBN7_M_MTFz=w2880-h1466"
                            alt="photo" />
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">홍량택</p>
                        <p className="text-base text-gray-400 font-normal">海賊王におれはなる</p>
                        <p className="text-base text-gray-600 font-medium">프로젝트환경구축, Backend, DB설계</p>
                    </div>
                </div>

                <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        <img className="object-center object-cover h-auto w-full"
                            src='https://lh3.googleusercontent.com/fife/AK0iWDzflJK5uWM38IpwA-w-bTvjkbTTSqaF6vPSE_U1uQLfqVioy9j42lnjQUM_CM0bsKWMpvkXP_TyRrSLm-q5VMyqRGFBe7SjoT6eiTauRSASczZ01czdiQW5CMOs-LZOULXW0QTgjVn6pUbCLs20fjthzbGfYo7o8A30HWD8zL4Dk8T-mOQHJmmzZYp2Q4tFpUsXTJvzfxCCobFAPeOzsIJRE3t6M_tzlxzWFtJESU8KyXoZWA9jjP57oM0Na2J6pxjnCn4kU3mwLWwqB98EyKYDGDbGc9US3DyjFLCeU3sQHKw5qUmHNcuHoanHzKqoDaVav5joKheSE6hvqDH0j5UCwLInRmJtnaUhtM6-XVoruLfAUDaQK14_AX-B5yJeO_dhd0VpwfWo8JhMoMUXtZgO6IEeigvp6AWxakAwhq-tz-1BzayUAY-7kfo07furZTXONQYgWpY8P6c-KmHnEzGgu1hW3oueVp4mzJxn25XcB7phbEW4TD2lSje-IzRRX-q3PiJqxw-te9tsj-PuIZjpRJ2HAxx20nFDKpJPtw3AZp01tGBOe5SUXIWeo4tnNbDStKo8pzcGWdfmeanq6Y0UqJzCLw69O__-sXVnM1cVy2HOhSt3Niean_Anh60vR7Q0bhdc0sOBmC5fcqR5AvD7-wUvFq79bO79pRkQbkLpiKy97HSAErOjYGJCT1fV19cGW1WLhPobaFhZ2b5743RLVhP6skYd9Xta3X2xe4t92f1bKpTUTLKYGSyYoerh0tubVfG1bBI1yY2We4UFmdd7TjOWvIr9WjB2SkbWqHrZe4-5fSi5Vs14tV3m9SJ-zQ-PaBwPexLrR7Qv8s5LpGdDL9GFvLTnylg2rQwIYYKcfwoqr0zE6k_BV7TKJoEqsKPY6aXUYK-oIDSm-1hQ-G2ZwWIhJsOgD-rDK-6N-NVCiux7SsYnabk5DCCet6C3SZLoHTO7gM9OCoNU9eYnOWoQpAi3QtgreY1MxbXjrHzZ17IdoIRQp8bU1tiLy7iAPsQtySdulcQYdJO7CbEvaHNkBJEW0hDIXgnnz4JzrTHAEgyI7NiQmw--wb58Y5PPxawIs2hZ_OTzfeYIu-33yU7r4fEIlmqbxFCt_-OVMH7kZ0No8EAuOKXFHhQfEEbO7exaKrMms6T19Snz5IYVmouwLAU1bVaGNDOvsvFvhCO2qI8FEXaSewUvkEWzPRZbiR11yeRj_d-_ReSAWL7xr7hN1v9VG59g0kpl3ncNdUyWzxxPjYRJA9NfSufUDAav6KUcW1hl3XBxGDlmvizWxQ10HLSYb8CyqabFheS5wMUAdX71wTVInJPHuauZjAQEvYvaCrCStCaHr6xclnfEbJKjnmOHg2wq_d7q0pRWzInQcEgFFTJBikfoZaJrC2Ps-BiUTPpwA7FlClVMyuYmpfVFX-RfV7-9OwtHOyI9DU1HC2DzjcSLOWL-rKNh-aaQ4_PQ-cmfJmbm0p6EZS-i-68zIdcNEudyaEmE3h2exzwGlsnZYljG6wK_NGDEzsng7s9nI1AnhXk=w1098-h868'
                            alt="photo" />
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">김범기</p>
                        <p className="text-base text-gray-600 font-medium">
                            기획, UX/UI, Backend, data analysis
                        </p>
                    </div>
                </div>

                <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        <img className="object-center object-cover h-auto w-full"
                            src="https://lh3.googleusercontent.com/fife/AK0iWDyF1l9uXHMFdQSH5ThOl3kK4jsai7Se4OECmr-v_ZIz57_t0FjCjACANO0iI3ygSseYIv_emt0GJidkGhZhFcEBr9vFOCiGngd6n_1uGmb4qu_kyyzhFa_xtTcoiTC5-Fimr68irDdk1-7m8PvbuwQDsFKln0kT99fzoHgIP12T0tZKCIHwHWMZzMlNKxdzMJtoZKXtDkLgG4bwKZgby7-MQSBqdUYu6SsSvhgBhoVQtTwO70BZRTSUwOUMcRLhNSBzUCPsoy5hSFCnfMmUTUpPy6vBfyo_cWviFTJ8g3swBr-RWwcZAmKt2yuFh1i93hnP_XVMP8KLeRJMP4-sqD4xDbKfXBRZO44-ChR6xt8hnQXUrXmblmOhaX78BqqJchV76EqLWyTWEmBKzdBKjsMeAXz7bxr6jrxk8FZbqqPNXwHvkhpaNNcPC80JZcuegVksZoQUzktxbGW9TGcrxc8tcIWTm5cRDY6nOSSl5ayicxVJPustZ76ILAThARgSVIdDjE-CbfrJrGvP6EwZpuqkxQ9ZbF8XaNrQQKhv_SbLeKBb4749QsLsaMG4kZoxRXNsmCuKPUtySt52rcWP__fgjnswjTMHKzUGRKbECdkSjfKNpi4byhl-vefrF-1ti3kZ-W8JR_IkmfXncMxREe0Xve8P4NPDm75Ppfs_2WCjH1hXDJv9Vd_JHCFHqPGZ0Cdv36pVmXSPK2Skkmi7wS1ZbLtKce9G5Afo_l1sFekt4i0-2PQaEElUGUkKB0ppibzVBugM5Lg1inNFB4f6WH-kSOIPX4De2rDZdDsMQYAZYZMWO8u3LzsayqyuwvlyLdT5jtzIS2VKSlZaNiQ0F0qCvJhTZF4Z9keUoRNpS7BwJ8GPWMydd1evFWSYcHfXREoc9sKxWqrogUzoEcb_7JudJmV0BI8HXDunKgIl6krBWOjFg_UrNIag2KGH8eq4FZ8kre99TqT36qxZBFB98falAiWolHoj_SLkhWTmaSxIsBRaX9SUoCSwF6VpeZtWjNEivxBV8D-vG6n4OM65wnEEfYeirZz3JAKvHkd1qe1qzuIEWi_tIyu2JLCWINK6oN41DVNS22aSCR_jVhhS9gFbOQWHzuuMZ4vjaJdwqMAGHmrRLCi9bEwMn3Izh0WOtBRqDsiY8z76k4y-OoWoVFuT8zkwSuXE4UfAlqf1Apj4drectecL_or9lA1Bus-qQOLZ0IKA1_GmIOTEOZbeaD__3Uo1dTjuxHob1V4DafSyVFshbbWVqd_dXpJNZlqdstFHYS8YFQTTZYaVjHbGyTPOhP8i4DnPlA_KQ6F7B6taKf_uxkRnTDLOqV80gArFOzZu2IZ-91VgGg7twvU4sehv4TbUpqgV8mYsSNp2is2nqeOZHHBTfbXFxgyXjW5Yd_3UJy-a1RrW9iJ6V3JXx4weaEofnby6v1RyQNm4aLb4sD20Ebshu-0BTvBBjCO2NifnhYry3q4mVMV5_bZBGB009FIN5t5oKonR9zVsw1kT2WozBZAd4aocKvEoxadJp_IlwQfUIeQ=w1098-h868"
                            alt="photo" />
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">이지연</p>
                        <p className="text-base text-gray-600 font-medium">검색 엔진 구축, 데이터 분석</p>
                    </div>
                </div>

                <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        <img className="object-center object-cover h-auto w-full"
                            src="https://lh3.googleusercontent.com/fife/AK0iWDxqw9dU-85OHuJsOOAoVW4dE44FiriNXjtpSvc7Qb9k-4rAWRCZiaC5ldKB1Cfk-jvCI3ej1I3Zn45LkXhw8YHefMHM_fq0Dx74JRJzLxlb3CDtVtedYQNqwMCy2GOca40MTdKqS5Kk11GrF4lAUpshlVK-GCqEA2peAmJX51kgkwCANgNQOJvdQUZ4-mTr9Y1L6lLfQV4P-6-Roamg2TQJqO81b5csvEYn23im-k3-xp8fK901Y2i2oLAVUA0RoeBchNp91YmmbVSPohrxd9cLfE4_YWPcVMcUQ3OiMSlT8TRqHgU5izUIWOL9E-1reC03bwbbwG9ksCgwmV2h9ZkxDrg2EaP0diVZGfFwktIB4LKmAbK_fEKdiby7ophuvtIgvSpnAs3pVeWzHMjFZvSuX5M93IwkZHrVmSB5hiYqHAOKiXcvHAUlbXNJ03q9JrOZSPNM562zKElWM6Wwm4c4KO9HVFxE7wlQvBA4oXH-7Lj9-FjCJTfhtwtJIK8qAmNKpemh3XJBC00MBNHRpwj5wmf_n5BBBmxky_me6Eznns6u2nh753oIvT1ny3liLx3UHkEu1J99RLWrTR6uwJacicphsSYf0ERo-H3s3HUSaaw-frt5pj-RIonuZVS56SWjxpa7uRcTERezcMkGPaBdy3ClQXv1Jy-BHERklkgQQBvNnGo6db5Lo3M5hnj3gHQ77qfjeQ6RtbK3IqcRlqHXXVAQNThkSRYe7rAMiqbXWg7IFaY-HWEMRVG3c5SjU5oyWyEXbbMlJPOEWQpxnY_5qVfQe2IUXiOIXCS90sPfLZaYbu8QdmlDKHF3miShX6HMxhvbS5q-lK7UQZNrks4GCgQ7lnRcrudZpgItkIpcPzswmy9lX_eh3MBUlJENTU25ToFSPhCP75LWGxHmRhIpx3mOj5CvzeryMzkTdRuVcU9CMR4bQEO-eXsmfvkBoRlYxbOEEQGxKydYd4W3TkMpirMITdCpS4VuJXqZFU6k5AimShjHPKoXg_eEdQj1f0G_h_tDFMYRgaOUhJ8ebmsfFTX_s2tGy7P34qA09EkyQgrm0dWXvBEK89Q-oY17mELzZzWKp3lcEdHBUUoSMJRYvluuELF_uK-21QlRaLqDciX_Suf0-ODhHGZRLD_idaZvgvCUpng3R72GQorJL_bVWN6OYMb-HFjRoeCxjHJYMyxq1Y4U3JrkJqGz77LO7shGKcF06aGZyYzDOFAGedGiF1Ylwzmw2DQ5rEPxlohZWCgF02NeKj-Hk7NRC-6ulySiTqMRe6Jzr4Xe9NSi6E7XOCi9fwHVFQW5Xj8PWjI1aQ3k-cb3ROKc7wLFd8OZjrPdRz-DAI8sCngm4JT5Ejr2W77D5WbMJW6lyDYNPlDTg8h8QWfd5sVGL35Ny2aunKYncp4xcb0Q1fJWhoOJEaLhjIBJDy24gDhKZiDOX7vWnus89RSI6Rk3w9RpOKHjEMQxWTBjMFkP0kgxVjeg_BpEWVAjUwsTtpcm5fMcNWz_8lKphAe7Xi7MaXQrUW53uieIUKequKg=w1098-h868"
                            alt="photo" />
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">이민재</p>
                        <p className="text-base text-gray-600 font-medium">데이터 파이프라인 구축, 데이터 적재</p>
                    </div>
                </div>

                <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-center items-center">
                    <div>
                        <img className="object-center object-cover h-auto w-full"
                            src="https://lh3.googleusercontent.com/fife/AK0iWDyqQoP667xItH45bqyx_cxKR5GzRhWKmI_YUE0ex4pDKHLzCqqfQYPfTR4SJtWrg-UBklJXwz8Jasct7TvbQdAgwslnPFJiIlxb-81NoOp3p6MP-ywc49e8q7352o2jsLoadO8jXxz6l76J_N4Z9mIAEj2kDXnmJf7GN6Eg-gNNgNEH1uNlU-M2QXvpxjgvK2pYUroy_JnxU92NvqtzkxsS-ANlsX8dSPlR4bB7oSKD17J522hCEYU279QleL7Vn-emOA1dAVEBP1xw9S-1iyUZXtcyfw6JVdcGguZGRUm6Baks-LQpWQEg5Xu6K8EFEh1JRNWOdy70y8IzD4iXhWsmQxTcyUycLfpuQyoRBPvTZWvMw97HsaY1CA0lFU6l3EEeXyIJyia7d1fS0GdR2-naXjIndgP0DxWB_VkE87at5xj6TFAR2A9Pa-EdSfUytsowjZX2HAx25Y7_6cjwa7qQ4mbMz7Y0T9IAxcy1eOcFOEWmiwm3tXSWKih_5RL12F03wsS3Ii3n9ItDpV6FwWlbFLCZnY3fNX66fCrvmoGXmapiFAl-mXWasjwXHE2cqWD-k_185flonehgP6kg0PFNkWYzwaYJm3NBM4_l7K-On6l4Xb80GvItMHCC2zTh1MutmRC6-I9xgTVF-ANiyVk3yz_yjpU7D4kHuVLb_WxtPkuyogRUYfuZ6bdEsyMgU--SZT00t1_oCPPo3UGO_47ELtrg0CYVFdLF6JLDreirPJi2ufLRMVbqTYWQlP_cFzJoEir7Jh1hrPSwp4lVRMGtk4rjpRwJTwl5eXbDPOG3Ixm-e-afEZFSMMIEMrkWVJG0pq_IQ7symRTpQdoCw1eSdNyNrZYemom4Bc5uIRPDvrwN3QOKYEfSqa0vn28tNfV0jKcIxlEYbmist80La-LxR7XDamuqOncvrSKe_T4SoGpAyjJFGX8sNeheQf2RQGM7kwyUvoCBhWqnb8GO-HIdGkEJUiF_sre4knsFExkAvxZYrc4fo9zXuGVnnQ9fHxg4NrU8sc-fEBwM4q6KowRx3eZoJz9Ou2WJi_1E6rcMtU-reawcm3s_qhAcqMEdj73HkXs0QcaWUw2EwEHpcQriMJIeQiUGS9PS6yF7a6f5q9qopiwGM9ehixTg0hM7qJrsgDsUrl0CRDW1zDh9XcnLJ-_4lQIwFpD-N0rs8VbDF7Ht_RAAM7NTBf0g3jzYxz-6LJ1Hd2HKVOPiyvJDVgH9WGTCPX8Tb8Lo7AqIAiYwAgKEOXwDMTXSwj3DytOmsR0c9hXwOfyOUdR0ugSz1Y4Xynq9WHQn60CCRYozBHZ76hxZQIND-dbTer0qG1Com-p5tXZV20P8wWk2q9GpssbL_iJN_dNIFlhUfN2r5k4bcV3Yxn3VA8-G0brYMtxvZoSZauI1dMA2UJZ03LCxukZYHA6t9ya07bP4Dzv295pJXp11IAwqEx08k5ilbY9VIPdIbrQ8VZw-z2FbFRWF3AsRzR0O79u-4XwHcRaCrU8Jby2GDmBb2PNN277LpDGfqfDHAQXeJiYsnUt3OdcM=w1686-h868"
                            alt="photo" />
                    </div>
                    <div className="text-center py-8 sm:py-6">
                        <p className="text-xl text-gray-700 font-bold mb-2">정승균</p>
                        <p className="text-base text-gray-600 font-medium">Frontend, UX/UI</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

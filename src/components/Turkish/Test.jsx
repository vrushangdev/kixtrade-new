import React from "react";

function Test() {
  return (
<section className=" relative  w-full  h-full mt-8 sm:mt-8">
      <div className="container-wrapper">
        <div className=" text-center">
          <h1 className="text-2xl sm:text-4xl font-extrabold text pt-4  sm:pt-8 pb-7 uppercase">
          Trade-athon Ödül Havuzları
          </h1>
        </div>
        <div className="bg-grad3  p-[2px] sm:max-w-5xl  w-full mx-auto ">
          <div className="bg-sec">
            <div class="w-full mx-auto table-1">
              <div>
                <p className=" text-base sm:text-[22px] font-semibold  mb-4 pr-2">
                Toplam Trade-athon 1.000.000 $KiX Ödül Fonu iki havuza bölünmüştür:

                </p>

                <ul className=" ml-5 	">
                  <li className="	list-disc py-4 text-[#FFC200] text-3xl " >
                    <p className="text-base sm:text-[22px] text-white	">
                    900.000 $KiX Trading Ödülü Fonu - her yarışmacının KiX Test Platformunda işlem yapmaktan elde ettiği toplam kazanç ve kâra göre verilir.

                    </p>
                  </li>
                  <li className="list-disc  py-4 text-[#FFC200] text-3xl">
                    <p className="text-base sm:text-[22px] text-white ">
                    100.000 $KiX Zealy Quest Ödül Fonu - KiX Zealy platformunda görev almayı seçen her yarışmacının ürettiği toplam XP'ye göre verilir.

                    </p>
                  </li>
                </ul>

                <p className="text-base sm:text-[22px] font-normal  my-4 pr-2">
                Yarışmacılar KiX Trade-athon'a istedikleri zaman girebilir ve istedikleri zaman oynamayı bırakabilirler ve KiX Test platformunda VEYA KiX Zealy platformunda elde edilen tüm kazanımlar Trade-athon yarışmasına uygun olarak dikkate alınacaktır. Bu promosyonun sonunda.

                </p>
              </div>
              {/* <table class="w-full">
                <tbody>
                  <tr className=" py-4 my-4 flex flex-col flex-no wrap  lg:table-row border-b border-[#00000042]">
                    <td class="py-2 px-4 w-[350px]">
                      {" "}
                      <h1 className="text-[22px] font-bold text-center">
                        Tue 23 October
                      </h1>
                    </td>
                    <td class="py-2 px-4">
                      <div className=" text-base text-[22px] font-normal max-w-2xl mb-4 pr-2">
                        <p>
                          Onboarding - directly on KiX Test Site or through
                          Zealy
                        </p>
                        <p> 1,000 FreeKiX for all completing registration</p>
                        <p>Practice Trading available</p>
                        <p>100,000 $KiX Zealy Quest Prize Fund active</p>
                      </div>
                    </td>
                  </tr>
                  <tr className="flex flex-col flex-no wrap lg:table-row border-b border-[#00000042]">
                    <td class="py-2 px-4">
                      <h1 className="text-[22px] font-bold text-center">
                        Wed 8 November
                      </h1>
                    </td>
                    <td class="py-2 px-4">
                      {" "}
                      <div className=" text-base text-[22px] font-normal max-w-xl mb-4">
                        <p>All Practice Trades reset</p>
                        <p> 1,000 FreeKiX reset in all wallets</p>
                      </div>
                    </td>
                  </tr>

                  <tr className="flex flex-col flex-no wrap lg:table-row border-b border-[#00000042]">
                    <td class="py-2 px-4">
                    <h1 className="text-[22px] font-bold text-center">Fri 10 November</h1>
                    </td>
                    <td class="py-2 px-4">
                      {" "}
                      <div className=" text-base text-[22px] font-normal max-w-xl mb-4">
                <p>KiX Trade-athon Begins</p>
                <p>Live Trading & Game Group Winnings</p>
                <p> 900,000 $KiX Trading Prize Fund active</p>
                <p>100,000 $KiX Zealy Quest Prize Fund continues</p>
              </div>
                    </td>
                  </tr>
                </tbody>
              </table> */}
            </div>
            <a href="https://docs.google.com/document/d/1GKZVvKESnomDOAVn-w6a6SbojloBdX6ZduWteLmIbuQ/edit">
              <p className="text-[#FFC200] text-xl text-center">
              Hükümler ve Koşullar
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Test;


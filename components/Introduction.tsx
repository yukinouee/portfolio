import React from 'react'

const Introduction = () => {
  return (
    <div className=" flex m-5 md:m-10 justify-center bg-[#E2DDD7] bg-opacity-30 rounded-xl h-80 max-w-4xl">  {/* モバイルでは90%、中サイズ以上では50%、大きいデバイスでは40% */}
      <div className="items-center flex ">  
        <img src="/face.jpg" alt="顔写真" className="h-[70%] rounded-full" />
      </div>
      <div className="flex flex-col my-3 ml-10 w-[60%] p-4 justify-center">
        <h1 className="m-0 text-3xl font-bold mb-3">井上 勇希</h1>
        <p className="ml-3 text-slate-600 leading-relaxed overflow-hidden">
          東京工業高等専門学校の情報工学科を卒業後、早稲田大学の基幹理工学部・情報理工学科の3年次に編入学。<br/>
          2024年度は休学中。<br/><br/>
          生成AIを用いたプロダクト開発に興味があり、2024年3月～現在まで株式会社Infodeliverでアルバイトとして開発に従事。
        </p>
      </div>
    </div>
  )
}

export default Introduction

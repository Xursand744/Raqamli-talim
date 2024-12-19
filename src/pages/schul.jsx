import rec from"../assets/res.png"
import dicon from"../assets/DIcon.png"
import dicon3 from"../assets/DIcon3.png"
import dicon2 from"../assets/DIcon2.png"
import dicon1 from"../assets/Vector.png"


export default function schul({ rank, location, studying, graduated, employed, exporters }) {
    return (
      <div className="border rounded-lg p-4 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
        <img src={rec} alt="" />   
          <div className="flex-1">
            <h3 className="font-medium">PDP Academy</h3>
            <p className="text-sm text-blue-500">{location}</p>
          </div>
          <div className="text-sm font-medium text-gray-600">{rank}</div>
        </div>
  
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-slate-100 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">O'qiyotganlar</p>
            <div className="flex items-center gap-2 justify-between">
              <span className="text-lg font-medium">{studying}</span>
              <img src={dicon} alt="" />
                            
            </div>
          </div>
          <div className="bg-slate-100 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Bitirganlar</p>
            <div className="flex items-center gap-2 justify-between">
              <span className="text-lg font-medium">{graduated}</span>
              <img src={dicon3} alt="" />
            </div>
          </div>
        </div>
  
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-100 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Ishga kirganlar</p>
            <div className="flex items-center gap-2 justify-between">
              <span className="text-lg font-medium">{employed}</span>
              <img src={dicon2} alt="" />
            </div>
          </div>
          <div className="rounded-lg bg-[#E3EEFF] text-center">
            <p className="text-sm text-gray-600  mb-1">IT-Exportchilar</p>
            <div className="flex items-center justify-around  gap-2">
              <span className="text-lg font-medium">{exporters}</span>
              <img src={dicon1} alt="" />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  
  
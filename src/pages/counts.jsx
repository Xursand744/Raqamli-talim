export default function MetricsSection() {
    return (
        <div className="container p-6">
            {/* Header Section */}

            <div className="grid grid-cols-1  justify-between md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="mb-8 gridlar">
                    <h2 className="text-2xl font-medium text-gray-900 mb-4">Markaz raqamlarda</h2>
                    <p className="text-gray-600 max-w-2xl">
                        2023-yilda rezident kompaniyalarning o'quv kurslarini 14300 nafardan ziyod o'quvchilar muvaffaqiyatli bitirdilar, chiqarilgan IT-mutaxassislar soni esa 5190 dan ortiqni tashkil etdi. IT Park rezident kompaniyalari 400 dan ortiq IT kurslarini taklif etadilar.
                    </p>
                </div>
             
                    <div className="bg-blue-50 grid rounded-lg p-6">
                        <div className="flex flex-col items-center justify-center h-full">
                            <div className="text-4xl font-bold mb-2">7<span className="text-blue-500">ta</span></div>
                            <div className="text-gray-600">Aktiv loyihalar</div>
                        </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-6">
                        <div className="flex flex-col items-center justify-center h-full">
                            <div className="text-4xl font-bold">5,012</div>
                            <div className="text-gray-600">IT o'quvchilar</div>
                        </div>
                    </div>
             
            </div>

            {/* Percentage Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { count: '12',
                        percent:'%',
                     },
                    { count: '4',
                        percent:'%',
                     },
                    { count: '2',
                        percent:'%',
                     },
                    { count: '8',
                        percent:'%',
                     },
                ].map((metric, index) => (
                    <div key={index} className="bg-blue-50 rounded-lg p-6">
                        <div className="flex flex-col items-center justify-center">
                            <div className="text-3xl font-bold mb-2">{metric.count} <span className="text-blue-500 font-bold">
                            {metric.percent}</span></div>
                            <div className="text-gray-600">Ko'rsatgich</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


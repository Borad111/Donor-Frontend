import React from 'react'

type Sponsor = {
    type: 'image' | 'text'
    src?: string
    alt?: string
    text?: string
    className?: string
}

const sponsors: Sponsor[] = [
    {
        type: 'image',
        src: './test1.png',
        alt: 'Star Fun',
        className: 'w-40 h-32 object-cover rounded',
    },
    {
        type: 'image',
        src: './test1.png',
        alt: 'Castle',
        className: 'w-40 h-32 object-cover rounded',
    },
    {
        type: 'image',
        src: './test1.png',
        alt: 'Star Emoji',
        className: 'w-40 h-32 object-cover rounded',
    },
    {
        type: 'image',
        src: './test1.png',
        alt: 'PaymentStars',
        className: 'w-40 h-32 object-cover rounded',
    },
    {
        type: 'image',
        src: './test1.png',
        alt: 'Apple',
        className: 'w-40 h-32 object-cover rounded',
    },
    {
        type: 'image',
        src: './test1.png',
        alt: 'TalentGEM',
        className: 'w-40 h-32 object-cover rounded',
    },
    {
        type: 'image',
        src: './test1.png',
        alt: 'TalentGEM',
        className: 'w-40 h-32 object-cover rounded',
    },
    {
        type: 'image',
        src: './test1.png',
        alt: 'TalentGEM',
        className: 'w-40 h-32 object-cover rounded',
    },
]

const Sponsors = () => {
    return (
        <div className="bg-[#c6e3de] flex flex-col items-center py-8">
            <h2 className="text-2xl font-bold mb-8">Sponsors</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-10 w-full max-w-7xl">
                {sponsors.map((sponsor, idx) => (
                    <div className="flex flex-col items-center" key={idx}>
                        {sponsor.type === 'image' ? (
                            <img
                                src={sponsor.src}
                                alt={sponsor.alt}
                                className={sponsor.className}
                            />
                        ) : (
                            <span className={sponsor.className}>{sponsor.text}</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sponsors

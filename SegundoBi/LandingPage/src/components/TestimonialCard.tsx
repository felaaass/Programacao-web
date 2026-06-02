import Star from '../assets/star.svg'
import StarOuter from '../assets/starOuter.svg'

interface TestimonialCardProps {
    image: string;
    text: string;
    rating: number;
    name: string;
    role: string;
}

export default function TestimonialCard({ image, text, rating, name, role }: TestimonialCardProps) {
    const stars = Array.from({ length: 5 }, (_, index) => {
        return index < rating ? Star : StarOuter;
    });

    return (
        <div className="carousel-card">
            <img src={image} alt="Imagem perfil cliente" />
            <span className="testimony">
                <p>{text}</p>
            </span>
            <span className="rating">
                {stars.map((star, i) => (
                    <img key={i} src={star} alt="ícone estrela" width={22} height={20} />
                ))}
            </span>
            <span className="names">
                <p>{name}</p>
                <p>{role}</p>
            </span>
        </div>
    );
}
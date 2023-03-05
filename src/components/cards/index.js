import Jonah from '../../../public/assets/jonah.jpg'
import Image from 'next/image';
export default function Review_Card({review}) {
    return (
      <>
        <div class="w-full rounded p-2 bg-white border-2 overflow-hidden shadow-lg">
          <Image
            className='w-full h-full image-link'
            src={review}
            alt="Sunset in the mountains"
          />
         
       
        </div>
      </>
    );
  }
  
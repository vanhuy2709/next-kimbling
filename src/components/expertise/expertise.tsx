import { sequel, sourceSerif } from '@/data/font';
import Title from '../title/title';
import {
  masterOfCeremoniesList,
  voiceTalentList,
  stylingList
} from '@/data/expertise';

const Expertise = () => {

  return (
    <div className='py-20 md:py-32 lg:py-48 bg-white'>

      {/* Wrapper */}
      <div className="max-w-screen-2xl mx-auto px-4">
        <Title name={'Expertise'} color='black' />

        {/* Content */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-12 gap-x-40'>
          {/* Column 1 */}
          <div>
            <h2
              className={`text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-extrabold ${sequel.className} mb-6 leading-none text-black`}
            >
              MASTER of CEREMONIES
            </h2>
            <p className={`text-base md:text-xl ${sourceSerif.className} mb-14 text-black`}>
              Master of Ceremonies is the host or hostess who is in charge of proceedings and keeping a ceremony, event or meeting flowing smoothly. The MC formally opens the event, introduces speakers and performers, and engages the audience throughout the program.
            </p>
            <ul>
              {
                masterOfCeremoniesList.map(item => (
                  <li
                    key={item.id}
                    className={`${sequel.className} text-sm md:text-base uppercase leading-[2.8] mb-2 text-black`}
                  >
                    {item.name}
                  </li>
                ))
              }
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h2
              className={`text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-extrabold ${sequel.className} mb-6 leading-none text-black`}
            >
              VOICE TALENT
            </h2>
            <p className={`text-base md:text-xl ${sourceSerif.className} mb-14 text-black`}>
              A Voice Talent is a person who uses their voice professionally to bring characters and content to life. A voice talent is a gifted professional who uses their unique voice and performance skills to bring heart and resonance to all kinds of media productions in a compelling way.
            </p>
            <ul>
              {
                voiceTalentList.map(item => (
                  <li
                    key={item.id}
                    className={`${sequel.className} text-sm md:text-base uppercase leading-[2.8] mb-2 text-black`}
                  >
                    {item.name}
                  </li>
                ))
              }
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h2
              className={`text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] font-extrabold ${sequel.className} mb-6 leading-none text-black`}
            >
              STYLING
            </h2>
            <p className={`text-base md:text-xl ${sourceSerif.className} mb-14 text-black`}>
              A Stylist is a creative professional who helps individuals and productions showcase their desired image and style. The role of a Stylist requires exceptional taste, vision, industry knowledge and interpersonal skills. Skilled stylists can amplify their client's inner confidence and outer glamour.
            </p>
            <ul>
              {
                stylingList.map(item => (
                  <li
                    key={item.id}
                    className={`${sequel.className} text-sm md:text-base uppercase leading-[2.8] mb-2 text-black`}
                  >
                    {item.name}
                  </li>
                ))
              }
            </ul>
          </div>

        </div>
      </div>
      {/* End Wrapper */}

    </div>
  );
};

export default Expertise;
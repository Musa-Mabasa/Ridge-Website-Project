import React from 'react'
import './Music.css'
import * as slicons from 'react-icons/sl'
import { IconContext } from 'react-icons/lib'

function Music() {
  return (
   <div className='wrapper'>
    <div className='title'>
        <h2>Stream my Music here</h2>
      </div>
      <div className='accordain'>
        {data.map((item, index) => (
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <div className='accordain-item'>
             <div className='site-content'>
                  <div className='accordain-icon'>
                    {item.icon}
                  </div>
                  <div className='accordain-title'>
                    {item.site}
                  </div>
             </div>
                <div className='suffix-icon'>
                  <IconContext.Provider
                    value={{ color: '#545454', size: '25px' }}>

                    <slicons.SlArrowRight/>
                  </IconContext.Provider>
                </div>
            </div>
          </a>
            
        ))}
      </div>
   </div>
  )
}
export default Music

const data = [
  {
    link: "https://open.spotify.com/artist/3Qdtx3XbuyxpXzxBBOBffq",
    icon: <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 0C11.193 0 0 11.1932 0 25C0 38.8078 11.1932 50 25 50C38.808 50 50 38.8078 50 25C50 11.1941 38.808 0.00136719 24.9996 0.00136719L24.9998 0.000195313L25 0ZM36.4646 36.0574C36.0168 36.7918 35.0555 37.0246 34.3211 36.5738C28.4514 32.9885 21.0623 32.1764 12.3602 34.1646C11.9572 34.2564 11.5343 34.1843 11.1844 33.9643C10.8346 33.7443 10.5864 33.3943 10.4945 32.9914C10.4487 32.7919 10.4427 32.5854 10.4769 32.3836C10.511 32.1818 10.5846 31.9887 10.6934 31.8154C10.8023 31.6421 10.9443 31.492 11.1112 31.3736C11.2782 31.2552 11.4668 31.1709 11.6664 31.1256C21.1898 28.9498 29.3584 29.8865 35.9482 33.9139C36.6826 34.3647 36.9154 35.323 36.4646 36.0574ZM39.5246 29.2502C38.9602 30.1672 37.7602 30.4568 36.8438 29.8926C30.1238 25.7621 19.8803 24.5658 11.932 26.9785C10.9012 27.2898 9.8125 26.709 9.49961 25.6799C9.18906 24.649 9.77031 23.5623 10.7994 23.249C19.8785 20.4939 31.1656 21.8285 38.8828 26.5707C39.7992 27.1352 40.0889 28.335 39.5246 29.2502ZM39.7873 22.1617C31.7299 17.3758 18.4363 16.9355 10.7436 19.2707C9.5082 19.6453 8.20176 18.9479 7.82754 17.7125C7.45312 16.4766 8.1498 15.1711 9.38613 14.7955C18.2168 12.1146 32.8973 12.6328 42.1736 18.1398C43.2873 18.7992 43.6514 20.2344 42.9916 21.3439C42.335 22.4553 40.8959 22.8215 39.7885 22.1617H39.7873Z" fill="#1ED760"/>
    </svg>,
    site: "Spotify"
  },
  {
    link: "https://music.apple.com/us/artist/raja-de-spyce/1658646151",
    icon: <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M49.9922 12.7609C49.9922 11.2234 49.8625 9.69219 49.4954 8.19531C48.836 5.46875 47.2813 3.38594 44.9547 1.85625C43.7579 1.075 42.4407 0.595312 41.0407 0.342187C39.9655 0.15409 38.8773 0.0506474 37.786 0.0328125C37.7047 0.025 37.6157 0.0078125 37.5251 0H12.4766C12.1594 0.025 11.8422 0.040625 11.525 0.05625C9.97036 0.145313 8.42505 0.307813 6.95942 0.89375C4.17661 1.99219 2.16567 3.9125 0.993799 6.67969C0.587549 7.61562 0.382861 8.60781 0.237549 9.61719C0.115674 10.4313 0.0500488 11.2531 0.0266113 12.075C0.0266113 12.1406 0.0109863 12.2047 0.0109863 12.2703V37.7344L0.0594238 38.6141C0.165674 40.3156 0.384424 42 1.10161 43.5625C2.45317 46.5172 4.72349 48.4609 7.84067 49.3969C8.71099 49.6656 9.62349 49.7875 10.5344 49.8688C11.6907 49.9828 12.8454 49.9984 14.0016 49.9984H36.9829C38.0735 49.9984 39.1641 49.925 40.2547 49.7875C41.9719 49.5672 43.5829 49.0625 45.0407 48.1031C46.7663 46.9853 48.1269 45.3867 48.9547 43.5047C49.3454 42.625 49.5657 41.6906 49.7282 40.7453C49.9641 39.3375 50.0125 37.9125 50.0125 36.4891C50.0047 28.5781 50.0125 20.6688 50.0047 12.7578L49.9922 12.7609ZM36.6125 21.0688V32.9672C36.6125 33.8375 36.4907 34.6922 36.1 35.4813C35.4985 36.7094 34.5219 37.4828 33.211 37.8578C32.4848 38.0659 31.7362 38.1861 30.9813 38.2156C30.032 38.2717 29.0953 37.9768 28.3493 37.3871C27.6034 36.7973 27.1004 35.9538 26.936 35.0172C26.7854 34.1745 26.9156 33.3057 27.3065 32.5441C27.6974 31.7826 28.3275 31.1704 29.1 30.8016C29.7672 30.4766 30.4922 30.2812 31.2157 30.1344C32.0047 29.9641 32.7938 29.8094 33.5751 29.6297C34.1532 29.5 34.5266 29.15 34.6407 28.5547C34.6735 28.425 34.6813 28.2859 34.6813 28.1562V16.8125C34.6785 16.6831 34.6596 16.5545 34.625 16.4297C34.5438 16.1125 34.3157 15.925 33.9907 15.9406C33.6563 15.9562 33.3313 16.0141 33.0063 16.0797C31.4188 16.3891 29.8329 16.7062 28.2532 17.0312L20.5469 18.5859C20.5141 18.5938 20.4735 18.6109 20.4407 18.6109C19.8625 18.7734 19.6594 19.0344 19.6344 19.6359C19.6266 19.725 19.6344 19.8156 19.6344 19.9047C19.6266 25.325 19.6344 30.7453 19.6266 36.1641C19.6266 37.0438 19.5282 37.9062 19.1797 38.7188C18.6016 40.0531 17.5766 40.8922 16.1938 41.2906C15.4628 41.5034 14.7079 41.6236 13.9469 41.6484C11.9532 41.7219 10.2922 40.3953 9.95161 38.4344C9.65786 36.7422 10.4313 34.9188 12.3516 34.1047C13.1 33.7953 13.8735 33.625 14.6625 33.4625L16.4532 33.0969C17.25 32.9266 17.6657 32.4219 17.7063 31.6078V12.7922C17.7063 12.5312 17.7391 12.2719 17.7954 12.0188C17.9422 11.425 18.3657 11.0828 18.9344 10.9438C19.4641 10.8047 20.0094 10.7078 20.5454 10.5938C22.075 10.2844 23.5969 9.975 25.1266 9.67344L29.8547 8.7125C31.2547 8.43594 32.6454 8.15156 34.0454 7.875C34.5016 7.78594 34.9657 7.6875 35.4282 7.65469C36.0704 7.59844 36.5188 8.00469 36.5844 8.65625C36.6 8.81094 36.6094 8.96562 36.6094 9.12031V21.0594L36.6125 21.0688Z" fill="#F2484B"/>
          </svg>,
    site: "Apple Music"
  },
  {
    icon: <svg width="50" height="34" viewBox="0 0 50 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M39.1875 0.666672V6.97917H50V0.666672H39.1875ZM13.0625 9.45834V15.7646H23.8729V9.45834H13.0625ZM39.1875 9.45834V15.7646H50V9.45834H39.1875ZM13.0625 18.2375V24.5438H23.8729V18.2375H13.0625ZM26.1271 18.2375V24.5438H36.9396V18.2375H26.1271ZM39.1896 18.2375V24.5438H50V18.2375H39.1875H39.1896ZM0 27.0208V33.3313H10.8125V27.0188L0 27.0208ZM13.0625 27.0208V33.3313H23.8729V27.0188H13.0604L13.0625 27.0208ZM26.1271 27.0208V33.3313H36.9396V27.0188L26.1271 27.0208ZM39.1896 27.0208V33.3313H50V27.0188H39.1875L39.1896 27.0208Z" fill="#D87F25"/>
          </svg>,
    site: "Deezer"
  },


]

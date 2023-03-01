import cookie from 'js-cookie';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getWallets } from '../store/walletSlice';

const Custom404 = () => {
  const { replace } = useRouter();
  const dispatch = useDispatch();

  const userWallet = async () => {
    const token = cookie.get('aegis_token');
    if (token) {
      const res = await dispatch(getWallets()).unwrap();
      setTimeout(() => replace(`/home/${res.wallets[0].id}`), 3000);
    } else {
      setTimeout(() => replace('/login'), 3000);
    }
  };

  useEffect(() => {
    userWallet();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <p className="font-rubik font-medium text-purple text-5xl mb-1">Oops!</p>
      <p className="body-m mb-7">You are lost</p>
      <svg
        width="250"
        height="110"
        viewBox="0 0 250 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M80.4389 84.4378H69.098V104.331H41.6017V84.4378H0.624756V64.0094L43.4205 1.44093H69.098V63.6886H80.4389V84.4378ZM41.7087 63.6886V51.7097C41.7087 49.4636 41.8157 46.4689 41.9227 42.6185C42.1367 38.7681 42.2437 36.8429 42.3506 36.629H41.6017C39.9969 40.2655 38.1781 43.5811 36.1453 46.7897L24.6974 63.6886H41.7087Z"
          fill="#EEDCFC"
        />
        <path
          d="M162.072 53.1001C162.072 71.2824 158.969 84.6517 152.978 93.1012C146.879 101.551 137.571 105.829 124.947 105.829C112.643 105.829 103.442 101.444 97.1294 92.5664C90.924 83.6891 87.8213 70.5337 87.8213 53.1001C87.8213 34.8108 90.817 21.4415 97.0224 12.8851C103.121 4.3287 112.429 0.0505066 125.054 0.0505066C137.25 0.0505066 146.559 4.54261 152.764 13.4199C158.862 22.2971 162.072 35.4525 162.072 53.1001ZM115.425 53.1001C115.425 64.7581 116.173 72.7797 117.564 77.0579C119.062 81.4431 121.416 83.5822 124.84 83.5822C128.263 83.5822 130.724 81.3361 132.222 76.844C133.613 72.3519 134.362 64.4373 134.362 53.1001C134.362 41.6559 133.613 33.7413 132.222 29.1422C130.724 24.5431 128.37 22.2971 124.947 22.2971C121.523 22.2971 119.062 24.5431 117.671 28.9283C116.066 33.3134 115.425 41.3351 115.425 53.1001Z"
          fill="#EEDCFC"
        />
        <path
          d="M249.375 84.4378H238.034V104.331H210.538V84.4378H169.561V64.0094L212.357 1.44093H238.034V63.6886H249.375V84.4378ZM210.645 63.6886V51.7097C210.645 49.4636 210.752 46.4689 210.859 42.6185C211.073 38.7681 211.18 36.8429 211.287 36.629H210.538C208.933 40.2655 207.114 43.5811 205.082 46.7897L193.634 63.6886H210.645Z"
          fill="#EEDCFC"
        />
        <path
          d="M170.952 91.8177C170.952 91.8177 171.915 90.3203 172.129 88.716C172.343 87.1117 170.845 85.6143 169.561 84.6517C168.277 83.6891 165.174 81.1222 167.1 79.9457C169.026 78.7692 179.297 75.6675 181.758 73.7423C184.218 71.8171 184.218 68.2876 183.577 66.7903C182.935 65.186 175.98 59.0895 162.821 59.0895C149.661 59.0895 133.826 65.5068 131.473 65.6138C129.119 65.7207 129.226 61.3356 129.226 61.3356L128.905 59.0895H120.132L118.741 61.3356C118.741 61.3356 119.276 64.3303 116.815 64.6512C114.354 64.8651 102.158 58.3409 93.3845 54.9183C88.035 52.7792 79.6898 51.2818 77.1221 51.2818C73.1635 51.2818 67.279 54.3835 65.9952 59.3034C64.7113 64.2234 69.0979 74.1702 70.1678 76.6301C71.2376 79.0901 71.9866 80.3735 71.4516 81.657C70.9167 82.9404 69.6328 87.6465 69.3118 88.9299C69.0979 90.2134 69.0979 92.5664 69.3118 92.7803C69.5258 92.9942 73.1635 96.2028 73.4844 96.3098C73.8054 96.4168 75.6242 96.7376 74.8753 95.0263C75.7312 95.9889 76.1592 97.4863 76.9081 96.3098C77.657 95.0263 76.9081 89.4647 76.9081 86.6839C76.9081 83.903 81.5086 80.3735 81.9366 80.1596C82.3646 79.9457 86.1092 80.1596 87.0721 80.1596C88.035 80.1596 89.3189 78.8762 87.0721 77.9136C84.8253 76.951 82.7925 77.4857 81.0807 77.3788C79.3688 77.2718 76.5871 76.7371 77.764 73.1006C78.299 71.4963 78.5129 69.1433 78.6199 66.8972H78.7269C83.5414 71.7102 95.0963 76.6301 95.0963 76.6301L102.586 81.657L125.588 87.4326L142.707 84.3309L147.521 79.9457C147.521 79.9457 147.307 76.5232 152.122 76.5232C154.582 76.5232 158.113 76.0954 158.755 75.6675"
          fill="white"
        />
        <path
          d="M76.4803 97.3794C76.0523 97.3794 75.6244 97.0585 75.4104 96.6307C74.7684 97.0585 73.9125 96.9515 73.4846 96.8446C73.2706 96.7376 73.1636 96.7376 69.9539 93.9568C69.526 93.529 69.098 93.2081 69.098 93.2081C68.2421 92.5664 68.884 88.716 68.884 88.716C69.098 87.4326 70.4889 82.6196 71.0238 81.2292C71.3448 80.3735 71.0238 79.5179 70.1679 77.8066C70.0609 77.4858 69.8469 77.1649 69.7399 76.7371L69.6329 76.5232C65.9953 68.1807 64.6045 62.1912 65.4604 58.9826C66.8512 54.0627 72.7356 50.5331 77.2292 50.5331C77.2292 50.5331 77.2292 50.5331 77.3362 50.5331C80.1179 50.5331 88.4631 52.1375 93.7056 54.2766C97.2362 55.667 101.195 57.4852 105.046 59.1965C110.182 61.5495 115.531 64.0095 116.815 63.9025C117.243 63.9025 117.564 63.6886 117.885 63.3677C118.313 62.726 118.313 61.7634 118.206 61.4425C118.206 61.2286 118.206 61.1217 118.313 61.0147L119.704 58.7687C119.811 58.5548 120.025 58.4478 120.239 58.4478H129.012C129.333 58.4478 129.654 58.6617 129.654 59.0895L129.975 61.3356C129.975 62.0843 130.082 64.1164 130.831 64.8651C131.045 65.079 131.259 65.186 131.473 65.079C132.008 65.079 133.827 64.5442 135.966 63.7956C142.386 61.7634 153.192 58.5548 162.821 58.5548C176.301 58.5548 183.577 64.9721 184.219 66.6833C184.968 68.6085 184.861 72.3519 182.186 74.491C180.581 75.6675 176.408 77.2719 172.664 78.6623C170.31 79.5179 168.17 80.3735 167.421 80.8014C167.1 81.0153 167.1 81.1222 167.1 81.2292C167.1 81.8709 168.17 83.1544 169.882 84.4378C170.845 85.1865 173.092 87.0047 172.664 89.1438C172.343 90.8551 171.487 92.4594 171.38 92.4594C171.166 92.7803 170.738 92.8873 170.417 92.6733C170.096 92.4594 169.989 92.0316 170.203 91.7108C170.203 91.7108 171.059 90.3203 171.273 88.823C171.487 87.3256 169.561 85.8282 169.026 85.4004C167.742 84.4378 165.602 82.6196 165.709 81.0153C165.709 80.5875 165.923 79.9457 166.672 79.5179C167.528 78.9831 169.668 78.2345 172.129 77.2719C175.552 75.9884 179.832 74.3841 181.223 73.3145C183.47 71.6032 183.363 68.3946 182.828 67.1111C182.186 65.6138 175.338 59.8382 162.607 59.8382C153.192 59.8382 142.493 63.1538 136.073 65.079C133.613 65.8277 131.901 66.3625 131.259 66.3625C130.617 66.3625 130.082 66.1485 129.547 65.7207C128.263 64.4373 128.263 61.6565 128.263 61.3356L128.049 59.8382H120.239L119.169 61.5495C119.276 62.0843 119.276 63.3677 118.527 64.3303C118.099 64.9721 117.35 65.2929 116.601 65.3999C114.996 65.5068 110.824 63.6886 104.084 60.5869C100.232 58.8756 96.3803 57.0574 92.8497 55.667C87.3932 53.5279 79.048 52.0305 76.9082 52.0305C73.3776 52.0305 67.7071 54.9183 66.4233 59.5174C65.8883 61.5495 66.1023 66.1486 70.4889 76.2023L70.5958 76.4162C70.7028 76.7371 70.9168 77.1649 71.0238 77.4858C71.8797 79.4109 72.4147 80.5875 71.8797 81.9779C71.3448 83.2613 70.0609 87.9673 69.8469 89.1438C69.6329 90.3203 69.633 91.9247 69.7399 92.4594C69.9539 92.5664 70.1679 92.8873 70.5958 93.2081C71.4518 93.9568 73.1636 95.4542 73.5916 95.775C73.9125 95.882 74.1265 95.775 74.2335 95.775C74.2335 95.775 74.2335 95.6681 74.1265 95.4542C74.0195 95.1333 74.1265 94.8124 74.3405 94.5985C74.6614 94.3846 74.9824 94.4916 75.1964 94.7055C75.5174 95.0263 75.7313 95.3472 75.9453 95.6681C76.0523 95.775 76.1593 95.9889 76.2663 96.0959C76.6942 95.4542 76.4803 92.2455 76.3733 90.1064C76.2663 88.823 76.1593 87.7534 76.1593 86.7908C76.1593 83.4752 81.5088 79.7318 81.5088 79.6249C81.8298 79.4109 82.5787 79.4109 85.6814 79.5179C86.2163 79.5179 86.7513 79.5179 86.9652 79.5179C87.2862 79.5179 87.5002 79.304 87.6072 79.197C87.6072 79.0901 87.5002 78.8762 86.7513 78.5553C85.3604 77.9136 83.9695 78.0205 82.6857 78.0205C82.0437 78.0205 81.5088 78.0205 80.9738 78.0205C79.797 77.9136 78.1921 77.6997 77.3362 76.4162C76.6942 75.5606 76.6943 74.2771 77.1222 72.8867C77.5502 71.6033 77.8711 69.5711 77.9781 66.8972C77.9781 66.6833 78.0851 66.5764 78.1921 66.4694C78.2991 66.3625 78.5131 66.2555 78.7271 66.2555H78.834C79.048 66.2555 79.155 66.3625 79.262 66.4694C83.9695 71.1754 95.3104 75.9884 95.4174 76.0954L102.907 81.1222L125.695 86.7908L142.493 83.6892L146.986 79.6249C146.986 79.0901 147.2 78.1275 147.949 77.2719C148.912 76.3093 150.303 75.7745 152.229 75.7745C154.904 75.7745 158.006 75.3467 158.434 75.0258C158.755 74.8119 159.183 74.9189 159.397 75.1328C159.611 75.4536 159.611 75.7745 159.29 76.0954C158.327 76.844 153.727 77.0579 152.229 77.0579C150.731 77.0579 149.661 77.3788 149.019 78.1275C148.377 78.8762 148.377 79.7318 148.377 79.7318C148.377 79.9457 148.27 80.1596 148.163 80.2666L143.349 84.6517C143.242 84.7587 143.135 84.7587 143.028 84.8656L125.909 87.9673C125.802 87.9673 125.695 87.9673 125.588 87.9673L102.586 82.1918C102.479 82.1918 102.479 82.1918 102.372 82.0848L94.8825 77.0579C94.5615 76.951 84.5045 72.6728 79.262 68.0737C79.048 70.2128 78.834 71.9241 78.4061 73.1006C78.0851 74.1701 78.0851 75.0258 78.4061 75.5606C78.941 76.3093 80.2249 76.5232 81.0808 76.6301C81.5088 76.6301 82.0437 76.6301 82.5787 76.6301C83.9695 76.6301 85.5744 76.5232 87.2862 77.2719C88.998 78.0205 88.998 78.9831 88.891 79.411C88.6771 80.2666 87.8212 80.8014 86.9652 80.8014C86.6443 80.8014 86.2163 80.8014 85.5744 80.8014C84.6115 80.8014 82.4717 80.6944 82.0437 80.8014C81.2948 81.2292 77.4432 84.5448 77.4432 86.6839C77.4432 87.5395 77.5502 88.716 77.5502 89.8925C77.7641 93.3151 77.8711 95.6681 77.3362 96.6307C77.4432 96.8446 77.1222 97.3794 76.4803 97.3794Z"
          fill="#3B4B75"
        />
        <path
          d="M136.608 38.1264C136.608 38.1264 139.069 34.383 144.097 35.2386C149.126 36.0943 141.316 41.1211 137.785 40.8003L135.431 46.7897L131.366 51.2818L124.839 49.8914L117.671 49.7845L114.568 46.7897L113.071 40.1585C113.071 40.1585 104.725 37.8055 105.153 34.7038C105.581 31.6022 112.322 35.8804 112.322 35.8804C112.322 35.8804 113.606 32.7787 114.568 32.4578C115.531 32.1369 115.424 28.2866 115.424 28.2866L132.971 26.8962L136.715 31.8161V38.1264H136.608Z"
          fill="white"
        />
        <path
          d="M131.473 51.9236H131.366L124.839 50.5332L117.778 50.4262C117.564 50.4262 117.457 50.3192 117.35 50.2123L114.247 47.2176C114.141 47.1106 114.033 47.0037 114.033 46.8967L112.643 40.6933C110.824 40.1585 104.19 37.9125 104.618 34.5969C104.725 33.6343 105.26 33.3134 105.688 33.0995C107.4 32.3508 110.61 33.9552 112.215 34.9178C112.75 33.7413 113.606 32.1369 114.568 31.8161C114.782 31.6022 114.996 29.8909 114.889 28.2866C114.889 27.9657 115.103 27.6448 115.531 27.5379L133.078 26.1475C133.292 26.1475 133.506 26.2544 133.72 26.3614L137.464 31.2813C137.571 31.3882 137.571 31.4952 137.571 31.7091V36.3082C138.855 35.2386 141.209 33.8482 144.526 34.4899C146.558 34.8108 146.772 35.8804 146.665 36.5221C146.344 38.6612 141.423 41.335 138.534 41.442L136.287 47.0036C136.287 47.1106 136.18 47.1106 136.18 47.2176L132.115 51.7097C131.794 51.8166 131.58 51.9236 131.473 51.9236ZM117.992 48.9288L124.946 49.0358L131.259 50.4262L135.003 46.255L137.357 40.3724C137.464 40.0516 137.785 39.9446 137.999 39.9446C140.353 40.1585 144.953 37.4847 145.167 36.2012C145.167 35.9873 144.633 35.7734 144.098 35.6664C139.604 34.9178 137.357 38.2334 137.25 38.3403C137.036 38.5542 136.822 38.6612 136.501 38.6612C136.18 38.5542 135.966 38.3403 135.966 38.0194V31.923L132.543 27.4309L116.066 28.8213C116.066 30.4256 115.852 32.6717 114.782 32.9926C114.461 33.0995 113.499 34.5969 112.964 36.0943C112.857 36.3082 112.75 36.4151 112.536 36.5221C112.322 36.629 112.108 36.5221 112.001 36.4151C110.182 35.2386 107.186 33.8482 106.116 34.276C106.009 34.276 105.902 34.383 105.795 34.7038C105.581 36.629 110.717 38.7681 113.285 39.4099C113.499 39.5168 113.713 39.6238 113.713 39.9446L115.21 46.3619L117.992 48.9288Z"
          fill="#3B4B75"
        />
        <path
          d="M161.537 108.182C157.364 107.647 153.085 107.219 148.912 106.791C147.521 106.684 146.13 106.577 144.74 106.471C143.028 106.364 141.316 106.257 139.497 106.15C137.464 106.043 135.538 105.936 133.613 105.936C124.839 105.722 115.852 105.936 106.972 106.684C105.581 106.791 104.191 106.898 102.8 107.005C101.302 107.112 99.697 107.326 98.1991 107.433C92.9567 107.968 87.8211 108.61 82.8996 109.358C82.8996 109.358 74.7684 106.364 74.9824 92.6734C75.1964 78.9831 90.0679 76.5232 95.4174 76.6301C99.376 76.6301 117.029 81.1222 127.407 81.3361C137.785 81.55 149.768 79.5179 155.866 79.7318C161.965 79.9457 169.561 86.363 169.561 94.4916C169.561 102.406 162.607 108.289 161.537 108.182Z"
          fill="#D49DFF"
        />
        <path
          d="M82.8994 110C82.7924 110 82.6855 110 82.6855 110C82.3645 109.893 74.1263 106.577 74.3403 92.6733C74.5543 79.4109 88.1419 75.8814 95.4172 75.8814C97.0221 75.8814 100.66 76.5231 105.26 77.4857C112.322 78.8762 121.202 80.4805 127.407 80.5874C133.077 80.6944 139.283 80.1596 144.739 79.6248C149.233 79.197 153.085 78.8761 155.866 78.9831C162.393 79.197 170.31 86.1491 170.31 94.3846C170.31 99.9463 167.1 104.759 164.104 107.433C163.355 108.182 162.179 108.93 161.43 108.824C157.15 108.289 152.871 107.754 148.912 107.433C147.521 107.326 146.13 107.219 144.739 107.112C143.028 107.005 141.316 106.898 139.604 106.791C137.678 106.684 135.645 106.577 133.719 106.577C125.374 106.364 116.387 106.577 107.079 107.326C105.688 107.433 104.297 107.54 102.906 107.647C101.409 107.754 99.8038 107.968 98.3059 108.075C93.1704 108.61 88.0349 109.251 82.8994 110ZM95.3102 77.1649C88.5699 77.1649 75.8381 80.3735 75.6242 92.5664C75.4102 104.652 81.8295 108.075 82.8994 108.61C87.9279 107.861 93.0634 107.219 98.0919 106.684C99.5898 106.577 101.195 106.364 102.692 106.257C104.083 106.15 105.474 106.043 106.865 105.936C116.173 105.294 125.16 104.973 133.612 105.187C135.538 105.187 137.571 105.294 139.497 105.401C141.209 105.508 142.921 105.615 144.739 105.722C146.13 105.829 147.521 105.936 148.912 106.043C152.978 106.364 157.15 106.898 161.537 107.433C162.607 107.219 168.812 101.764 168.812 94.2777C168.812 86.6839 161.644 80.4805 155.759 80.2666C153.085 80.1596 149.233 80.4805 144.846 80.9083C139.39 81.4431 133.184 81.9779 127.407 81.8709C120.988 81.7639 112.108 80.0527 104.939 78.6623C100.553 77.9136 96.8081 77.1649 95.3102 77.1649Z"
          fill="#3B4B75"
        />
        <path
          d="M157.899 99.7324C148.056 99.7324 133.506 98.4489 118.634 95.775C95.2034 91.4968 75.5174 96.7376 75.3034 96.8446C74.9825 96.9515 74.5545 96.7376 74.4475 96.4167C74.3405 96.0959 74.5545 95.668 74.8755 95.5611C75.0894 95.4541 95.0965 90.2133 118.741 94.4915C142.707 98.8767 163.998 99.0906 168.705 97.3793C169.026 97.2724 169.454 97.4863 169.561 97.8071C169.668 98.128 169.561 98.5558 169.133 98.6628C167.314 99.4115 163.249 99.7324 157.899 99.7324Z"
          fill="#3B4B75"
        />
        <path
          d="M74.5544 94.9194H74.4474C74.3404 94.9194 71.7727 94.0637 71.4517 92.0316C71.1308 90.2134 71.4517 87.5395 71.4517 87.3256C71.4517 87.0047 71.6657 86.8978 71.9867 86.8978C72.3076 86.8978 72.5216 87.2186 72.4146 87.4325C72.4146 87.4325 72.2007 90.2133 72.4146 91.8177C72.6286 93.2081 74.7684 93.9568 74.7684 93.9568C74.9824 94.0637 75.1964 94.2776 75.0894 94.5985C74.9824 94.7055 74.7684 94.9194 74.5544 94.9194Z"
          fill="#3B4B75"
        />
        <path
          d="M170.417 93.2081C170.31 93.2081 170.096 93.1011 169.989 92.9942C169.775 92.7803 169.882 92.4594 170.096 92.2455C170.524 91.9247 170.631 89.8925 170.417 88.1812C170.417 87.8604 170.631 87.6464 170.845 87.6464C171.166 87.6464 171.38 87.8603 171.38 88.0743C171.487 89.0369 171.701 92.1385 170.631 92.9942C170.631 93.2081 170.524 93.2081 170.417 93.2081Z"
          fill="#3B4B75"
        />
        <path
          d="M124.947 47.8593C124.626 47.8593 124.305 47.5384 124.305 47.2176C124.198 44.0089 123.877 38.8751 123.77 37.4847C123.342 37.4847 122.593 37.3777 122.165 37.4847C121.844 38.5542 121.202 42.9394 120.774 46.7897C120.774 47.1106 120.453 47.4315 120.025 47.3245C119.704 47.3245 119.383 46.8967 119.49 46.5758C120.667 36.736 121.095 36.5221 121.309 36.3082C121.951 35.7734 124.305 36.0943 124.626 36.2012C125.054 36.4151 125.161 36.5221 125.696 47.1106C125.696 47.5384 125.375 47.8593 124.947 47.8593Z"
          fill="#3B4B75"
        />
        <path
          d="M119.169 42.5115C119.276 43.1533 117.992 43.0463 116.494 43.2602C114.996 43.4741 113.819 44.0089 113.712 43.4741C113.605 42.8324 114.568 41.335 116.066 41.1211C117.564 40.8003 119.062 41.9768 119.169 42.5115Z"
          fill="#FF9292"
        />
        <path
          d="M116.601 41.7629C113.82 41.7629 111.573 39.5168 111.573 36.736C111.573 33.9552 113.82 31.7091 116.601 31.7091C119.383 31.7091 121.63 33.9552 121.63 36.736C121.63 39.5168 119.383 41.7629 116.601 41.7629ZM116.601 33.0995C114.568 33.0995 112.857 34.7038 112.857 36.8429C112.857 38.8751 114.461 40.5864 116.601 40.5864C118.634 40.5864 120.346 38.982 120.346 36.8429C120.346 34.7038 118.634 33.0995 116.601 33.0995Z"
          fill="#3B4B75"
        />
        <path
          d="M125.91 43.2602C125.803 43.9019 127.193 43.9019 128.798 44.2228C130.403 44.5437 131.687 45.2924 131.794 44.5437C131.901 43.902 130.938 42.1907 129.333 41.7629C127.728 41.442 126.124 42.6185 125.91 43.2602Z"
          fill="#FF9292"
        />
        <path
          d="M129.226 42.4046C129.119 42.4046 129.012 42.4046 128.905 42.4046C127.514 42.2976 126.338 41.7629 125.375 40.6933C124.519 39.7307 123.984 38.4473 124.091 37.0569C124.198 34.276 126.551 32.137 129.44 32.2439C132.222 32.3509 134.362 34.8108 134.255 37.5916C134.148 38.982 133.613 40.1585 132.543 41.1211C131.687 41.9768 130.51 42.4046 129.226 42.4046ZM125.589 37.1638C125.589 38.1264 125.91 39.089 126.551 39.8377C127.193 40.5863 128.156 41.0142 129.119 41.0142C130.082 41.0142 131.045 40.6933 131.794 40.0516C132.543 39.4098 132.971 38.4473 132.971 37.4847C133.078 35.4525 131.473 33.7413 129.44 33.6343C127.407 33.6343 125.696 35.1317 125.589 37.1638Z"
          fill="#3B4B75"
        />
        <path
          d="M116.601 22.511C116.601 22.511 113.82 21.1206 111.573 23.0458C109.326 24.864 108.149 29.2492 110.396 30.7465C112.643 32.2439 113.071 32.4578 114.461 32.4578C115.959 32.5648 115.638 31.1743 117.35 30.2118C119.062 29.2492 120.881 29.3561 121.416 30.4257C121.951 31.4952 122.058 32.7787 123.449 32.4578C124.839 32.1369 124.305 29.7839 125.802 29.57C127.3 29.3561 127.621 30.4257 129.226 30.5326C130.831 30.6396 130.51 29.8909 131.794 31.0674C133.078 32.2439 133.934 31.4952 134.255 32.4578C134.576 33.4204 135.431 34.8108 136.073 35.8804C136.715 36.9499 136.715 38.1264 136.715 38.1264C136.715 38.1264 139.176 35.6664 140.781 35.2386C140.781 35.2386 139.818 33.7413 140.781 32.4578C141.744 31.1744 143.028 29.57 141.53 28.3935C140.032 27.324 138.962 28.6074 138.534 27.4309C138.106 26.2544 137.464 19.7302 132.971 19.7302C128.477 19.7302 128.37 22.9388 126.337 22.511C124.305 21.9762 124.091 18.7676 121.951 19.7302C119.811 20.6928 121.523 24.2223 119.811 24.1153C117.885 23.9014 118.634 22.9388 116.601 22.511Z"
          fill="#3B4B75"
        />
        <path
          d="M136.608 45.2924C136.501 44.3298 138.213 41.9768 137.785 41.549C137.357 41.1211 135.86 42.2976 135.218 43.0463C134.576 43.688 133.72 45.7202 131.901 46.0411C130.082 46.3619 128.263 46.6828 127.193 46.7897C126.123 47.0036 124.947 47.2176 124.947 47.2176C124.947 47.2176 124.091 48.501 122.272 48.501C120.453 48.501 120.132 47.5384 120.132 47.1106C120.132 46.6828 120.132 46.6828 120.132 46.6828C120.132 46.6828 117.671 46.4689 116.173 45.0785C114.676 43.6881 113.071 42.0837 113.178 41.0142C113.178 41.0142 112.215 43.5811 112.322 45.5063C112.429 47.4315 112.429 48.9288 112.322 49.9984C112.215 51.0679 111.68 53.314 112.322 54.1696C112.964 54.9183 113.071 55.9878 113.178 57.1643C113.285 58.3408 117.029 60.4799 119.918 61.1217C122.914 61.8703 122.593 62.1912 124.305 62.2982C126.123 62.4051 126.658 61.5495 127.942 61.1217C129.226 60.6938 130.938 60.1591 132.543 58.8756C134.148 57.5922 135.539 55.0252 135.218 52.7792C134.897 50.5332 136.608 49.6775 136.608 48.2871C136.608 47.1106 136.715 46.3619 136.608 45.2924ZM122.7 53.5279C122.165 53.5279 121.737 52.9931 121.737 52.2444C121.737 51.4957 122.165 50.961 122.7 50.961C123.235 50.961 123.663 51.4957 123.663 52.2444C123.663 52.9931 123.235 53.5279 122.7 53.5279Z"
          fill="#3B4B75"
        />
        <path
          d="M121.951 49.1427C121.202 49.1427 120.56 48.9288 120.132 48.394C119.383 47.6454 119.49 46.6828 119.49 46.5758C119.49 46.148 119.811 45.9341 120.239 45.9341C120.56 45.9341 120.881 46.255 120.881 46.5758C120.881 46.5758 120.881 47.1106 121.202 47.4315C121.416 47.6454 121.737 47.7523 122.165 47.7523C123.662 47.7523 124.411 47.2175 124.411 47.1106C124.411 46.7897 124.732 46.4689 125.053 46.4689C125.481 46.4689 125.695 46.7897 125.802 47.1106C125.802 47.3245 125.802 47.7523 125.374 48.0732C124.625 48.8219 123.448 49.1427 121.951 49.1427C121.951 49.1427 122.058 49.1427 121.951 49.1427Z"
          fill="#3B4B75"
        />
        <path
          d="M148.912 106.791C147.521 106.684 146.13 106.577 144.74 106.47C143.028 106.364 141.316 106.257 139.497 106.15C139.497 106.15 143.456 101.551 142.279 91.9246C141.102 82.2987 138.534 80.9083 137.892 80.9083C137.25 80.9083 136.715 80.9083 136.715 80.9083C136.715 80.9083 136.822 79.0901 138.641 78.8762C140.46 78.6622 141.209 79.304 142.814 78.8762C144.419 78.4483 149.554 78.3414 152.443 89.3577C155.224 100.267 148.912 106.791 148.912 106.791Z"
          fill="white"
        />
        <path
          d="M148.912 107.433C147.414 107.326 146.023 107.219 144.739 107.112C143.028 107.005 141.316 106.898 139.604 106.791C139.39 106.791 139.176 106.577 139.069 106.364C138.962 106.15 138.962 105.829 139.176 105.615C139.176 105.615 142.921 101.016 141.744 91.8177C140.567 82.0848 138.106 81.4431 137.999 81.4431C137.25 81.4431 136.715 81.4431 136.715 81.4431C136.394 81.4431 136.073 81.1222 136.073 80.6944C136.18 79.8388 136.715 78.2344 138.641 78.0205C139.604 77.9136 140.353 78.0205 140.888 78.0205C141.53 78.1275 141.958 78.1275 142.707 78.0205C144.418 77.5927 149.982 77.1649 153.085 88.9299C155.973 100.16 149.768 106.791 149.447 107.112C149.233 107.433 149.126 107.433 148.912 107.433ZM140.781 105.508C142.065 105.615 143.456 105.722 144.739 105.722C146.023 105.829 147.307 105.936 148.591 106.043C149.661 104.759 154.154 98.7698 151.694 89.3577C148.805 78.5553 143.883 79.0901 142.921 79.411C141.958 79.6249 141.316 79.5179 140.567 79.411C140.032 79.304 139.497 79.304 138.641 79.411C137.999 79.5179 137.678 79.8388 137.464 80.1596C137.571 80.1596 137.678 80.1596 137.678 80.1596C138.106 80.1596 141.423 80.2666 142.814 91.7108C143.883 99.0906 141.851 103.583 140.781 105.508Z"
          fill="#3B4B75"
        />
        <path
          d="M106.972 106.577C105.581 106.684 104.19 106.791 102.8 106.898C101.302 107.005 99.6969 107.219 98.1991 107.326C98.1991 107.326 93.1706 102.406 92.8496 92.8872C92.4216 83.3683 96.2733 77.8066 103.442 76.5232C103.442 76.5232 105.046 76.0953 106.009 76.5232C107.079 76.951 108.256 77.3788 109.433 77.4858C110.61 77.5927 110.396 79.0901 110.396 79.0901C110.396 79.0901 101.623 88.2882 106.544 105.294L106.972 106.577Z"
          fill="white"
        />
        <path
          d="M98.1991 108.075C97.9851 108.075 97.8781 107.968 97.7711 107.861C97.5571 107.647 92.6356 102.62 92.2077 92.9942C91.7797 83.2613 95.6313 77.3788 103.335 75.8814C103.442 75.8814 105.153 75.3466 106.33 75.8814C107.507 76.4162 108.577 76.737 109.54 76.844C110.075 76.951 110.396 77.1649 110.717 77.4857C111.252 78.1275 111.145 79.0901 111.038 79.197C111.038 79.304 110.931 79.4109 110.824 79.5179C110.717 79.6248 102.372 88.609 107.186 104.973L107.614 106.364C107.721 106.577 107.614 106.791 107.507 106.898C107.4 107.112 107.186 107.219 106.972 107.219C105.581 107.326 104.191 107.433 102.8 107.54C101.302 107.754 99.8039 107.861 98.1991 108.075ZM104.939 76.951C104.404 76.951 103.87 77.0579 103.656 77.1649C96.5942 78.5553 93.1706 83.7961 93.5985 92.8872C93.9195 100.909 97.6641 105.615 98.5201 106.684C99.9109 106.577 101.409 106.364 102.8 106.257C103.87 106.15 105.046 106.043 106.116 105.936L105.902 105.401C101.195 89.3577 108.47 80.1596 109.754 78.7692C109.754 78.5553 109.754 78.3414 109.647 78.2344C109.647 78.2344 109.54 78.1275 109.433 78.1275C108.363 78.0205 107.079 77.6996 105.795 77.0579C105.474 77.0579 105.26 76.951 104.939 76.951Z"
          fill="#3B4B75"
        />
        <path
          d="M73.5915 86.6839C73.5915 86.6839 73.6985 87.3256 73.5915 88.609C73.4845 89.8925 74.1265 94.0637 74.9824 95.0263C75.8383 95.9889 76.2662 97.4863 77.0152 96.3098C77.7641 95.0263 77.0152 89.4647 77.0152 86.6839C77.0152 83.903 81.6157 80.3735 82.0437 80.1596C82.4716 79.9457 86.2163 80.1596 87.1792 80.1596C88.1421 80.1596 89.4259 78.8762 87.1792 77.9136C84.9324 76.951 82.8996 77.4857 81.1878 77.3788C79.4759 77.2718 76.6942 76.7371 77.8711 73.1006C78.406 71.4963 78.62 69.1433 78.727 66.8972C78.941 64.0095 78.834 61.4425 78.834 61.4425"
          fill="white"
        />
        <path
          d="M76.4803 97.3793C75.8383 97.3793 75.4104 96.8446 75.0894 96.2028C74.8755 95.9889 74.7685 95.6681 74.5545 95.4542C73.4846 94.2777 72.8426 89.8925 73.0566 88.5021C73.1636 87.3256 73.0566 86.7908 73.0566 86.7908C72.9496 86.47 73.1636 86.0421 73.5916 86.0421C73.9125 85.9352 74.3405 86.1491 74.4475 86.5769C74.4475 86.6839 74.6615 87.3256 74.4475 88.716C74.3405 90.1064 74.9824 93.9568 75.6244 94.5985C75.9453 94.9194 76.1593 95.2402 76.3733 95.5611C76.4803 95.6681 76.5873 95.882 76.6943 95.9889C77.1222 95.3472 76.9082 92.1386 76.8013 89.9995C76.6943 88.716 76.5873 87.6465 76.5873 86.6839C76.5873 83.3683 81.9367 79.6248 81.9367 79.5179C82.2577 79.304 83.0066 79.304 86.1093 79.411C86.6443 79.411 87.1792 79.411 87.3932 79.411C87.7142 79.411 87.9281 79.197 88.0351 79.0901C88.0351 78.9831 87.9281 78.7692 87.1792 78.4483C85.7884 77.8066 84.3975 77.9136 83.1136 77.9136C82.4717 77.9136 81.9367 77.9136 81.4018 77.9136C80.2249 77.8066 78.6201 77.5927 77.7642 76.3092C77.1222 75.4536 77.1222 74.1702 77.5502 72.7797C77.9781 71.4963 78.2991 69.4641 78.4061 66.7903C78.6201 63.9025 78.5131 61.3356 78.5131 61.3356C78.5131 61.0147 78.834 60.6939 79.155 60.6939C79.583 60.6939 79.797 61.0147 79.797 61.3356C79.797 61.3356 79.7969 64.0095 79.69 66.8972C79.476 69.6781 79.155 71.8171 78.7271 73.2076C78.4061 74.2771 78.4061 75.1328 78.7271 75.6675C79.262 76.4162 80.5459 76.6301 81.4018 76.7371C81.8298 76.7371 82.3647 76.7371 82.8996 76.7371C84.2905 76.7371 85.8954 76.6301 87.6072 77.3788C89.319 78.1275 89.319 79.0901 89.212 79.5179C88.998 80.3735 88.1421 80.9083 87.2862 80.9083C86.9652 80.9083 86.5373 80.9083 85.8953 80.9083C84.9324 80.9083 82.7927 80.8014 82.3647 80.9083C81.6158 81.3361 77.7642 84.6517 77.7642 86.7908C77.7642 87.6465 77.8711 88.823 77.8711 89.9995C78.0851 93.422 78.1921 95.775 77.6572 96.7376C77.4432 96.8446 77.1222 97.3793 76.4803 97.3793Z"
          fill="#3B4B75"
        />
        <path
          d="M168.491 96.0959C168.384 96.0959 168.384 96.0959 168.277 96.0959C167.421 95.882 167.207 94.7055 167.1 93.529C166.993 91.9246 166.03 89.3577 164.64 87.7534C164.426 87.5395 164.212 87.2186 163.891 86.8978C162.393 84.8656 160.039 81.8709 155.011 81.3361C149.233 80.6944 149.233 80.5875 149.233 79.9457C149.233 79.7318 149.447 79.5179 149.661 79.304C150.089 78.9831 152.871 76.951 155.439 76.6301C157.15 76.4162 158.541 75.2397 159.932 74.0632C160.574 73.5284 161.109 73.1006 161.751 72.5658C162.5 72.031 163.249 70.9615 164.105 69.892C165.603 67.8598 167.314 65.6138 169.775 64.972C170.096 64.8651 170.524 65.079 170.631 65.5068C170.738 65.8277 170.524 66.2555 170.096 66.3625C168.063 66.8972 166.565 68.9294 165.175 70.7476C164.319 71.9241 163.463 73.1006 162.5 73.7423C161.858 74.1701 161.323 74.7049 160.681 75.1328C159.183 76.4162 157.578 77.6997 155.546 78.0205C154.155 78.2344 152.657 78.9831 151.587 79.6248C152.336 79.7318 153.406 79.8387 155.118 80.0527C160.681 80.6944 163.356 84.1169 164.961 86.1491C165.175 86.47 165.389 86.7908 165.603 87.0047C167.207 88.9299 168.277 91.7107 168.384 93.529C168.384 94.0637 168.491 94.3846 168.598 94.5985C168.705 94.4916 168.812 94.2776 168.919 94.0637C169.775 92.5664 168.812 89.5717 168.384 88.5021C168.277 88.1812 168.384 87.7534 168.705 87.6464C169.026 87.5395 169.454 87.6465 169.561 87.9673C169.775 88.3951 171.38 92.3525 169.989 94.7055C169.775 95.3472 169.24 96.0959 168.491 96.0959Z"
          fill="#3B4B75"
        />
        <path
          d="M169.026 88.2882C169.026 88.2882 170.738 92.3525 169.561 94.3847C168.277 96.5238 167.956 95.1333 167.742 93.529C167.635 91.9247 166.672 89.1439 165.174 87.3256C163.57 85.5074 161.216 81.3361 155.117 80.6944C148.912 80.0527 149.982 79.9457 149.982 79.9457C149.982 79.9457 152.871 77.6997 155.438 77.2719C158.006 76.844 158.541 75.6675 160.788 74.1701"
          fill="white"
        />
        <path
          d="M168.491 96.0959C168.384 96.0959 168.384 96.0959 168.277 96.0959C167.421 95.882 167.207 94.7055 167.1 93.529C166.993 91.9247 166.03 89.3577 164.64 87.7534C164.426 87.5395 164.212 87.2187 163.891 86.8978C162.393 84.8657 160.039 81.8709 155.011 81.3361C149.233 80.6944 149.233 80.5875 149.233 79.9457C149.233 79.7318 149.447 79.5179 149.661 79.304C150.089 78.9831 152.871 76.951 155.439 76.6301C157.043 76.4162 157.792 75.7745 158.862 74.9188C159.29 74.491 159.825 74.0632 160.574 73.6354C160.895 73.4215 161.323 73.5284 161.537 73.8493C161.751 74.1702 161.644 74.598 161.323 74.8119C160.681 75.2397 160.146 75.6675 159.718 76.0954C158.541 77.058 157.685 77.8066 155.653 78.1275C154.262 78.3414 152.764 79.0901 151.694 79.7318C152.443 79.8388 153.513 79.9457 155.225 80.1596C160.788 80.8014 163.463 84.2239 165.068 86.2561C165.282 86.5769 165.496 86.8978 165.71 87.1117C167.314 89.0369 168.384 91.8177 168.491 93.6359C168.491 94.1707 168.598 94.4916 168.705 94.7055C168.812 94.5985 168.919 94.3846 169.026 94.1707C169.882 92.6733 168.919 89.6786 168.491 88.6091C168.384 88.2882 168.491 87.8604 168.812 87.7534C169.133 87.6465 169.561 87.7534 169.668 88.0743C169.882 88.5021 171.487 92.4594 170.096 94.8124C169.775 95.3472 169.24 96.0959 168.491 96.0959Z"
          fill="#3B4B75"
        />
      </svg>
      <p className="body-m mt-7">You will be redirected in any second</p>
    </div>
  );
};
export default Custom404;

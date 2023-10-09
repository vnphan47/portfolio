import React from 'react';

const IconPartnering = ({ isWeb = false, isIllustrations = false }) => {
	if (isWeb)
		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width={130}
				height={109}
				viewBox='0 0 130 109'
				fill='none'
			>
				<g clipPath='url(#clip0_81_182)'>
					<path
						d='M96.1439 87.6843V69.4083H124.312C124.335 68.9976 124.368 68.6767 124.368 68.3557C124.368 48.5457 124.368 28.7404 124.368 8.93033C124.368 6.74966 123.229 5.61685 121.077 5.61685C103.433 5.61685 85.7846 5.61685 68.1408 5.61685C48.8018 5.61685 29.4675 5.62629 10.1286 5.62629C9.67654 5.62629 9.2245 5.61685 8.76775 5.61685C6.79006 5.62629 5.62699 6.79214 5.61757 8.79344C5.60816 10.639 5.61757 12.4892 5.61757 14.3348C5.61757 22.8733 5.61757 31.4119 5.61757 39.9505C5.61757 49.4566 5.61757 58.9628 5.61757 68.4737C5.61757 68.7427 5.64112 69.0071 5.65995 69.3752H9.78955V87.6088C6.79477 88.3734 2.8959 86.5467 1.19132 83.5778C0.456752 82.2987 0.0235439 80.9299 0.0235439 79.4384C0.0235439 74.1991 0.0235439 68.9646 0.0235439 63.7253C0.0188351 57.3674 0 51.0095 0 44.6516C0 40.1109 0.0235439 35.5703 0.0235439 31.0249C0.0235439 24.667 0.00470878 18.3091 0.00470878 11.9512C0.00470878 10.6484 -0.0141263 9.34569 0.0470878 8.04768C0.249565 3.58723 3.85649 0.0519205 8.30158 0.0330403C17.3001 0 26.2938 0.0188802 35.2923 0.0188802C48.9666 0.0141601 62.6409 0 76.3152 0C91.4068 0 106.503 0 121.595 0.0283203C126.289 0.0377604 129.943 3.78548 129.953 8.5008C129.972 14.5519 129.995 20.603 129.995 26.6588C129.995 32.9554 129.958 39.2472 129.958 45.5437C129.958 51.8686 129.995 58.1934 129.995 64.5183C129.995 69.5404 129.995 74.5673 129.943 79.5894C129.896 83.8894 126.252 87.6748 121.986 87.7126C113.524 87.7881 105.067 87.7409 96.6053 87.7409C96.4876 87.7409 96.3699 87.7173 96.1439 87.689V87.6843Z'
						fill='#333333'
					/>
					<path
						d='M52.3664 97.6719H87.5599V35.4145H38.1365V45.218H32.5095C32.5095 44.8357 32.5095 44.51 32.5095 44.1843C32.5095 40.8237 32.5142 37.4583 32.5142 34.0976C32.5142 31.7281 34.3648 29.7835 36.7333 29.774C43.9236 29.7457 51.1139 29.7599 58.3042 29.7599C65.3768 29.7599 72.4447 29.7551 79.5173 29.7504C82.5874 29.7504 85.6622 29.7504 88.7324 29.7504C91.52 29.7504 93.2245 31.4968 93.2245 34.2864C93.2245 46.601 93.2339 58.9203 93.2339 71.2349C93.2339 82.006 93.2434 92.7819 93.2151 103.553C93.2151 104.355 93.0974 105.2 92.829 105.946C92.1462 107.839 90.7477 109.005 88.6193 108.991C79.7245 108.934 70.8249 108.981 61.9253 108.986C58.3372 108.986 54.7444 108.986 51.1563 108.981C50.8973 108.981 50.6383 108.981 50.1157 108.981C53.1858 105.611 52.0462 101.594 52.3617 97.6719H52.3664ZM65.7347 102.411C65.7347 101.033 64.6987 99.9092 63.4227 99.895C62.0194 99.8809 60.894 101.07 60.9176 102.543C60.9364 103.997 62.0242 105.111 63.4085 105.106C64.7552 105.101 65.7394 103.964 65.7347 102.411Z'
						fill='#333333'
					/>
					<path
						d='M12.7513 78.348C12.7513 70.2343 12.8266 62.1158 12.7183 54.002C12.6713 50.4243 15.5342 48.1209 18.4913 48.1445C26.9812 48.2011 35.4712 48.1445 43.9564 48.1633C47.1866 48.1728 49.4515 50.5611 49.4515 53.8888C49.4515 67.2418 49.4515 80.5995 49.4515 93.9525C49.4515 96.9214 49.4515 99.8903 49.4515 102.855C49.4515 106.649 47.0783 109.005 43.2642 109.005C35.0615 109 26.8588 108.986 18.6561 108.972C15.0963 108.967 12.756 106.631 12.7513 103.062C12.7419 94.8257 12.7513 86.5892 12.7513 78.3528V78.348ZM18.3877 96.2417H43.7398V53.8416H18.3877V96.237V96.2417ZM33.2675 102.491C33.2675 101.066 32.2221 99.9234 30.9131 99.9186C29.5381 99.9186 28.441 101.042 28.4221 102.477C28.4033 103.959 29.5099 105.125 30.9272 105.111C32.1986 105.097 33.2628 103.902 33.2675 102.491Z'
						fill='#333333'
					/>
					<path
						d='M108.688 107.546H96.158C96.1345 107.258 96.0921 107.003 96.0921 106.744C96.0874 104.445 96.0921 102.146 96.0921 99.8431C96.0921 99.6024 96.0356 99.3003 96.158 99.1304C96.4076 98.7811 96.709 98.361 97.081 98.2383C97.3211 98.158 97.7731 98.4884 98.0274 98.7386C98.277 98.9793 98.4653 99.338 98.5548 99.6779C99.1858 102.005 100.9 103.194 103.009 103.931C104.46 104.436 105.948 104.823 107.412 105.295C108.839 105.753 108.905 105.894 108.688 107.546Z'
						fill='#333333'
					/>
				</g>
				<defs>
					<clipPath id='clip0_81_182'>
						<rect width={130} height={109} fill='white' />
					</clipPath>
				</defs>
			</svg>
		);

	if (isIllustrations)
		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width={116}
				height={106}
				viewBox='0 0 116 106'
				fill='none'
			>
				<g clipPath='url(#clip0_81_205)'>
					<path
						d='M78.4847 100.374C79.7816 100.374 81.0473 100.349 82.313 100.381C83.4789 100.412 84.5575 100.714 85.1561 101.848C86.1599 103.738 84.9503 105.811 82.7743 105.975C82.3504 106.006 81.9264 105.994 81.5024 105.994C69.3132 105.994 57.124 105.994 44.9348 105.994C41.2438 105.994 37.559 106.013 33.8679 105.956C33.1447 105.943 32.3902 105.729 31.7169 105.446C30.6382 104.992 30.1706 104.11 30.2766 103.052C30.3889 101.848 31.1744 100.809 32.2219 100.538C32.6272 100.431 33.0574 100.393 33.4751 100.387C34.6972 100.362 35.9192 100.374 37.1412 100.362C37.1849 100.362 37.2285 100.324 37.322 100.273C36.6986 97.7536 36.0688 95.2148 35.4453 92.6823C33.8305 86.1746 32.2281 79.6669 30.5946 73.1656C30.2766 71.8867 30.4824 70.759 31.1994 69.6566C36.1374 62.0402 41.0443 54.4048 45.9698 46.7758C48.8129 42.3723 51.6747 37.9876 54.5366 33.5904C54.6488 33.414 54.7859 33.2565 55.0915 33.1431C55.1164 33.6282 55.16 34.1196 55.16 34.6046C55.16 46.2403 55.16 57.876 55.16 69.518C55.16 72.8695 55.1289 76.2272 55.1787 79.5787C55.1912 80.593 54.8234 81.1915 53.9505 81.6829C48.5698 84.713 48.1146 91.9767 53.0526 95.6495C56.7437 98.3962 62.1868 97.4449 64.7493 93.5957C67.4116 89.5891 66.2706 84.2658 62.1618 81.8592C61.1019 81.2356 60.5657 80.53 60.5844 79.2385C60.6467 74.4066 60.628 69.5684 60.628 64.7365C60.628 54.5119 60.628 44.2811 60.628 34.0566C60.628 33.7479 60.6592 33.4392 60.6717 33.1368C60.734 33.1179 60.8026 33.0927 60.865 33.0738C61.052 33.3195 61.2578 33.5526 61.4261 33.8109C67.555 43.2542 73.6776 52.7039 79.8003 62.1536C81.4338 64.6798 83.0798 67.1997 84.7134 69.7259C85.3992 70.7905 85.58 71.9371 85.2621 73.1845C83.8717 78.6653 82.4938 84.1461 81.1159 89.6269C80.2804 92.9406 79.4574 96.2542 78.6281 99.5679C78.5658 99.8073 78.5408 100.059 78.4847 100.381V100.374Z'
						fill='#333333'
					/>
					<path
						d='M71.7074 11.0813C72.2249 11.1191 72.6426 11.1695 73.0666 11.1695C81.5959 11.1821 90.119 11.1821 98.6483 11.201C99.5087 11.201 100.026 10.8356 100.419 10.0859C102.246 6.61476 106.024 4.85713 109.597 5.78949C113.462 6.79746 116.075 10.2245 116.006 14.2123C115.925 18.9749 111.661 22.7296 106.966 22.2823C103.998 21.9988 101.89 20.4869 100.463 17.9481C99.9701 17.0661 99.3965 16.7133 98.3927 16.7511C95.4062 16.8582 92.4134 16.8771 89.4269 16.9338C89.2648 16.9338 89.1027 16.9527 88.8034 16.9779C90.3434 18.0237 91.7837 18.9497 93.1741 19.9514C98.9413 24.1029 103.786 29.1365 107.471 35.2787C111.66 42.2652 113.942 49.8879 114.759 57.9768C114.896 59.3502 114.934 60.7424 114.928 62.1221C114.921 63.9805 113.868 65.1397 112.234 65.1964C110.594 65.2594 109.46 64.0057 109.422 62.0843C109.316 56.887 108.518 51.8156 106.804 46.9081C104.69 40.8666 101.417 35.537 97.1519 30.8122C91.472 24.5124 84.5138 20.2916 76.4459 17.8914C75.28 17.5449 74.0953 17.2488 72.9107 16.9527C72.5553 16.8645 72.175 16.8519 71.7136 16.7889C71.7136 18.5213 71.7136 20.2223 71.7136 21.9232C71.7136 22.9312 71.7323 23.9391 71.7011 24.9408C71.645 26.7173 70.822 27.6245 69.095 27.8513C68.752 27.8954 68.4029 27.908 68.0537 27.908C61.3201 27.908 54.5926 27.908 47.8589 27.908C44.9473 27.908 44.0619 27.0071 44.0681 24.0714C44.0681 21.9295 44.0681 19.7876 44.0681 17.6457C44.0681 17.3748 44.0681 17.0976 44.0681 16.581C41.5243 17.3055 39.0553 17.8347 36.7234 18.7166C30.2766 21.1546 24.5654 24.8274 19.6523 29.7097C14.9201 34.4094 11.5033 39.9658 9.30243 46.2907C7.54419 51.3558 6.48426 56.5531 6.39074 61.9394C6.3845 62.4119 6.30968 62.9032 6.16628 63.3442C5.73607 64.6609 4.62003 65.335 3.25459 65.1712C2.02008 65.0263 0.991326 64.0813 0.966386 62.7709C0.928977 60.8369 0.991326 58.8966 1.1659 56.9752C1.55247 52.7795 2.47523 48.691 3.88431 44.7158C5.53032 40.0918 7.81852 35.8142 10.6679 31.8328C13.7666 27.4922 17.4202 23.6998 21.7098 20.5562C23.2 19.4663 24.7774 18.4961 26.3174 17.4693C26.6167 17.2677 26.9222 17.0724 27.1841 16.7196C25.1266 16.7196 23.069 16.7196 21.0115 16.7196C19.8643 16.7196 18.7171 16.8204 17.5761 16.7448C16.5972 16.6755 16.061 17.1228 15.6246 17.9229C14.4711 20.0333 12.7503 21.4759 10.4247 22.0429C6.96434 22.8808 4.07136 21.8476 1.8455 19.0631C-0.355409 16.3479 -0.505046 13.3618 0.960152 10.2434C2.41288 7.13764 4.95671 5.72649 8.2612 5.6383C11.4971 5.5564 13.91 7.01795 15.4687 9.87175C15.9488 10.7537 16.5848 11.2073 17.6073 11.2073C26.2862 11.1821 34.959 11.1884 43.6379 11.1758C43.7377 11.1758 43.8312 11.1569 44.012 11.138C44.0245 10.8734 44.0494 10.6088 44.0557 10.3442C44.0557 8.05111 44.037 5.75799 44.0681 3.46488C44.0744 2.8979 44.143 2.29942 44.33 1.76394C44.7914 0.428385 45.895 0.0188993 47.1793 0.0125995C51.5126 0 55.8521 0 60.1915 0C62.91 0 65.6221 0 68.3405 0C70.6599 0 71.67 0.995364 71.7011 3.34518C71.7323 5.88399 71.7074 8.4291 71.7074 11.0813Z'
						fill='#333333'
					/>
					<path
						d='M60.6528 88.9654C60.6154 90.49 59.3934 91.731 57.9406 91.7184C56.357 91.7058 55.0664 90.3703 55.1349 88.8079C55.2035 87.1763 56.1824 86.4203 58.2087 86.4644C59.7862 86.4959 60.6965 87.422 60.659 88.9717L60.6528 88.9654Z'
						fill='#333333'
					/>
				</g>
				<defs>
					<clipPath id='clip0_81_205'>
						<rect width={116} height={106} fill='white' />
					</clipPath>
				</defs>
			</svg>
		);

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={109}
			height={109}
			viewBox='0 0 109 109'
			fill='none'
		>
			<g clipPath='url(#clip0_81_189)'>
				<path
					d='M29.5347 107.239L26.115 104.83C27.8482 103.757 28.7236 103.22 29.8149 102.544C31.5714 105.209 34.2442 105.25 37.0045 105.238C48.2149 105.203 59.4254 104.97 70.6242 105.302C79.6404 105.571 80.6675 102.13 79.7455 94.5301H47.4972C47.4271 93.2236 47.3746 92.2146 47.2987 90.739H79.9964V83.6178H83.5095C83.5095 89.4851 83.7721 95.2708 83.422 101.016C83.1594 105.378 79.8739 107.594 76.0398 108.994H35.9132C33.6664 108.994 31.4664 108.388 29.5347 107.233V107.239Z'
					fill='#333333'
				/>
				<path
					d='M0 82.8946C1.21967 82.4921 2.4335 81.7631 3.65901 81.7456C10.8078 81.6348 17.9566 81.6931 25.403 81.6931V72.7755H29.027V81.6931C33.0828 81.6931 36.8177 81.7748 40.5467 81.664C42.7585 81.594 43.7272 82.3288 43.663 84.6501C43.5463 88.7094 43.5697 92.7745 43.6572 96.8338C43.7039 98.9043 42.9861 99.8024 40.8093 99.7908C28.2333 99.7324 15.6573 99.7908 3.08127 99.7091C2.05418 99.7033 1.02709 98.9626 0 98.5602C0 93.3402 0 88.1145 0 82.8946ZM3.97414 96.0056H39.8873V85.4083H3.97414V96.0056Z'
					fill='#333333'
				/>
				<path
					d='M0 8.63763C1.00958 8.2177 2.0075 7.4595 3.02875 7.43617C8.3276 7.31369 13.6323 7.44783 18.9311 7.34869C21.2071 7.30786 22.0299 8.24686 21.9891 10.4398C21.9074 14.4816 21.9307 18.5351 21.9774 22.5768C22.0007 24.6531 21.1079 25.5105 19.007 25.4813C13.7082 25.4055 8.40347 25.5163 3.10461 25.4055C2.06585 25.3822 1.03876 24.6823 0 24.2974C0 19.0775 0 13.8575 0 8.63179L0 8.63763ZM3.9683 21.7137H18.0383V10.9589C15.4939 10.9589 13.1946 10.9589 10.8953 10.9589C8.59605 10.9589 6.32594 10.9589 3.97414 10.9589V21.7195L3.9683 21.7137Z'
					fill='#333333'
				/>
				<path
					d='M80.5274 1.63888C79.2786 4.26925 78.2048 5.23158 76.1098 4.03013C75.4212 3.63353 74.4116 3.72101 73.5479 3.72101C60.8843 3.70352 48.2208 3.68019 35.5572 3.72685C30.8886 3.74434 28.9045 6.04227 29.3713 10.9531H58.019V14.4583H29.313V24.1691C30.4276 23.9825 31.4372 23.8133 32.6977 23.5975V18.4593H36.4267V23.5275C48.8802 25.6213 56.1574 32.7834 58.2349 45.2237C59.1511 45.2645 60.0031 45.3054 60.8551 45.3462C61.6196 45.3812 62.3841 45.4162 63.4054 45.4628V48.9097C62.4541 48.9681 61.608 49.0322 60.7618 49.0614C59.9973 49.0847 59.2328 49.0614 58.2933 49.0614C56.2391 61.4375 49.1136 68.7454 36.5668 70.8334V75.9483H32.9311C32.8436 74.2686 32.756 72.6589 32.6627 70.8917C20.3668 68.8037 13.0137 61.7 10.9537 49.1955C9.28469 49.108 7.67402 49.0264 5.85327 48.9331V45.4745C7.44059 45.3987 9.03959 45.3287 10.8137 45.247C11.0062 44.6288 11.263 44.0223 11.3739 43.3924C12.7628 35.6529 16.9995 30.0247 23.8099 26.1579C24.6444 25.6855 25.4205 24.3266 25.4555 23.3526C25.6306 18.8209 25.5022 14.2717 25.5372 9.73412C25.5956 3.87849 29.2546 0.0874855 35.137 0.058324C48.0865 -0.017496 61.0419 -0.0349929 73.9972 0.0991501C76.0806 0.122479 78.1523 1.05565 80.5274 1.63888ZM28.4551 50.5428C24.656 45.1304 24.6619 40.5112 28.3092 37.0118C31.4605 33.9849 36.6602 33.4949 39.9515 36.3294C41.4688 37.6359 42.7527 39.5955 43.3479 41.5027C44.3867 44.8388 43.0503 47.8774 40.6051 50.5078C45.0986 53.1906 47.1003 57.075 47.4621 62.4349C51.6697 58.6322 53.7997 54.4738 54.3833 49.318C53.1928 49.1255 52.1832 48.9681 51.1795 48.8048V45.5853C52.3525 45.3812 53.3504 45.2121 54.3366 45.0371C52.9477 35.163 45.0344 27.4935 36.596 27.7735C36.5143 28.6891 36.4267 29.6165 36.3275 30.6838H33.0887C32.8611 29.5465 32.6627 28.5491 32.4701 27.5693C22.9753 28.4092 14.531 37.0935 15.2605 45.2004C16.1592 45.3112 17.0871 45.422 18.1083 45.5503V48.7931C16.9529 49.0089 15.9608 49.1955 14.8695 49.3996C15.4647 54.6604 17.6765 58.7838 21.9191 62.5923C21.9541 56.9816 24.2184 53.2723 28.4668 50.5311L28.4551 50.5428ZM36.6485 67.2348C38.6852 66.6458 40.4592 66.2317 42.1458 65.5901C42.741 65.3685 43.4121 64.6686 43.558 64.0737C44.445 60.446 42.7118 56.2409 39.6247 54.188C36.5785 52.1642 32.5518 52.17 29.5522 54.2055C26.5293 56.2526 24.7319 60.621 25.5898 64.1029C25.724 64.6395 26.2725 65.3044 26.7802 65.4793C28.6185 66.1209 30.521 66.5816 32.5226 67.1474C32.7327 65.701 32.8669 64.7736 33.042 63.5955C34.2208 63.6538 35.3004 63.7005 36.3392 63.753C36.4442 64.9719 36.5201 65.8234 36.6426 67.2348H36.6485ZM35.0086 38.2016C31.939 37.9975 29.3246 40.2838 29.1554 43.3224C28.992 46.1511 31.3205 48.7639 34.2091 49.0031C37.1737 49.248 39.8932 46.8334 40.0391 43.8415C40.1791 40.9311 37.9207 38.3999 35.0086 38.2016Z'
					fill='#333333'
				/>
				<path
					d='M80.008 36.5161H83.5328V51.7092C86.9642 48.7114 89.8996 46.1452 92.8292 43.579C94.79 41.8585 96.7333 40.1204 98.6999 38.4116C101.641 35.8628 104.921 35.717 107.249 38.0033C109.659 40.3712 109.595 43.5382 106.963 46.5301C99.1843 55.3836 91.3411 64.1787 83.6145 73.073C82.5991 74.2453 81.8288 75.7967 81.4203 77.3072C79.8738 83.0054 75.3686 86.8547 69.5504 87.018C65.4945 87.1288 61.4329 87.123 57.377 87.0005C57.272 87.0005 57.1669 86.983 57.0619 86.9655C55.5096 86.6681 54.8443 84.6793 55.9414 83.542C56.0056 83.4778 56.0698 83.4195 56.1399 83.3612C58.2349 81.7514 58.1649 79.576 58.1473 77.3364C58.0948 71.4808 60.3007 66.43 65.9731 64.7561C71.5696 63.1056 74.9076 58.9763 79.0276 55.646C79.6754 55.127 79.9497 53.838 79.9614 52.899C80.0489 47.51 80.0022 42.1209 80.0022 36.5161H80.008ZM80.0606 71.5624C88.2131 62.3124 96.3598 53.144 104.372 43.8589C104.95 43.1882 104.553 41.6835 104.606 40.5637C103.497 40.6978 102.061 40.4412 101.338 41.0419C96.9492 44.6755 92.7183 48.5073 88.4407 52.275C83.5328 56.6025 78.6308 60.9418 73.7288 65.2752C75.8705 67.404 77.8371 69.3578 80.0606 71.5624ZM61.3512 83.4778C63.3295 83.4778 65.5412 83.4836 67.753 83.4778C68.6225 83.4778 69.5095 83.5303 70.3557 83.3845C73.3903 82.8538 75.7013 81.2674 77.1427 78.5029C78.1231 76.6249 78.339 74.9801 76.4132 73.3879C74.5575 71.854 73.0635 69.8885 71.2077 68.3605C70.4841 67.7656 69.1069 67.4448 68.2023 67.6839C64.4208 68.6754 62.1448 71.8307 61.8472 76.0649C61.678 78.4562 61.5262 80.8474 61.3512 83.4895V83.4778Z'
					fill='#333333'
				/>
				<path
					d='M83.422 32.7134C77.3353 32.7134 71.2428 32.6376 65.1561 32.7543C62.6351 32.8009 61.7364 31.8503 61.7772 29.354C61.8881 23.0785 61.8764 16.7971 61.783 10.5215C61.748 8.13026 62.6701 7.33123 65.0452 7.34873C77.417 7.43038 89.7888 7.43621 102.155 7.34873C104.565 7.33123 105.417 8.20608 105.382 10.5565C105.294 16.9312 105.3 23.3059 105.382 29.6806C105.411 31.9377 104.483 32.7718 102.266 32.7484C95.9863 32.6726 89.7012 32.7251 83.422 32.7251V32.7134ZM65.7338 11.0697V28.8175H101.443V11.0697H65.7338Z'
					fill='#333333'
				/>
				<path d='M52.9185 101.307V98.1227H56.204V101.307H52.9185Z' fill='#333333' />
				<path d='M20.3201 92.4013V89.0535H36.2983V92.4013H20.3201Z' fill='#333333' />
				<path
					d='M7.60986 88.9952H16.2701C16.3168 90.0975 16.3635 91.0948 16.4218 92.3488H7.60986V88.9952Z'
					fill='#333333'
				/>
				<path d='M14.4726 18.086H7.64478V14.7441H14.4726V18.086Z' fill='#333333' />
				<path
					d='M69.0486 22.0111H97.9588C98.0114 23.0259 98.0639 24.0349 98.1222 25.2597H69.212C69.1653 24.344 69.1128 23.3467 69.0427 22.0111H69.0486Z'
					fill='#333333'
				/>
				<path d='M80.1831 18.0393V14.6741H97.8771V18.0393H80.1831Z' fill='#333333' />
				<path d='M76.2147 14.7441V17.9927H69.2468V14.7441H76.2147Z' fill='#333333' />
			</g>
			<defs>
				<clipPath id='clip0_81_189'>
					<rect width={109} height={109} fill='white' />
				</clipPath>
			</defs>
		</svg>
	);
};

export default IconPartnering;

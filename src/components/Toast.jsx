import logo2 from '../assets/logo2.png';
import PackageJson from '../../package.json';
import { useLocation } from 'react-router-dom';
import { handleCopyClipBoard } from '../common/ClipBoard';
import { Slide, toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Toast() {

    const location = useLocation();

    const copyUrl = () => {
        // 링크 복사        
        const rootUrl = PackageJson.homepage;
        const message = "지금 보고 있는 요리 준비는 링쿡으로 쉽게! \n"
        handleCopyClipBoard(`${message}${rootUrl}${location.pathname}`);
        toast.success("복사 성공! 이제 Crtl + V 키를 눌러 붙여넣기 해 보세요.")
    }

    return (
        <div className="w-full h-full flex items-center justify-center mb-7">
            <div
                className="rounded-md bg-green-500 w-4/5 px-2 py-2 text-2xl font-bold text-white transition flex items-center"
            >
                <div className="flex items-center space-x-7 ml-40">
                    <img
                        className="w-16 h-16"
                        src={logo2}
                        alt="로고2"
                    />
                    <span>
                        우측 버튼을 눌러 링크를 복사해 영상 설명에 추가해 보세요 🙌 <br />
                        <p className="text-base font-medium ml-3">
                            링크를 타고 영상을 보는 많은 구독자들이 링크를 통해 쉽게 재료를 구매할 수 있어요.
                        </p>
                    </span>
                </div>
                <button
                    type="button"
                    onClick={copyUrl}
                    className="rounded-md bg-white px-4 py-2 text-gray-700 transition hover:bg-gray-200 text-base font-semibold ml-40"
                >
                    ✔️ 링크 복사하기
                </button>
            </div>
            <ToastContainer
                autoClose={1500}
                hideProgressBar
                pauseOnHover={false}
            />
        </div>
    );
}

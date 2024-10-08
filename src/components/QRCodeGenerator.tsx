import type React from "react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Coffee } from "lucide-react";

const QRCodeGenerator: React.FC = () => {
	const [data, setData] = useState<string>("");
	const [size, setSize] = useState<number>(300);
	const [qrCodeUrl, setQrCodeUrl] = useState<string>("");

	const generateQRCode = () => {
		const encodedData = encodeURIComponent(data);
		const url = `https://api.apgy.in/qr/?data=${encodedData}&size=${size}`;
		setQrCodeUrl(url);
	};

	return (
		<div className="flex flex-col items-center mt-10 border-emerald-400 h-full">
			<h1 className="text-2xl font-bold flex flex-col mb-5">
				QR Code Generator
			</h1>
			<div className="flex flex-row max-md:flex-col gap-4 mb-5">
				<Input
					type="text"
					value={data}
					onChange={(e) => setData(e.target.value)}
					placeholder="Enter data for QR Code"
					className="p-2 border border-gray-300 rounded-md w-64"
				/>

				<Input
					type="number"
					className="w-full"
					disabled
					value={size}
					onChange={(e) => setSize(Number(e.target.value))}
				/>

				<Button onClick={generateQRCode} type="submit">
					Generate
				</Button>
			</div>
			<Separator />
			{qrCodeUrl && (
				<div className="flex flex-col items-center">
					<h3 className="text-lg font-semibold mb-3">Your QR Code:</h3>
					<img
						src={qrCodeUrl}
						alt="Generated QR Code"
						className="border border-gray-300 p-2"
					/>
					<p className="pt-5 text-slate-300">
						<span className="pt-5 text-slate-500">
							You generated a QrCode for:{"  "}
						</span>
						<a href={data} rel="noreferrer" target="_blank">
							{data}
						</a>
					</p>
				</div>
			)}
			<footer className="absolute inset-x-0 bottom-0">
				<p className="flex justify-center items-center">
					Made with <Coffee className="my-2 flex ml-2 mr-2" size={20} />
					<a href="https://github.com/brendondev">by Brendon</a>
				</p>
			</footer>
		</div>
	);
};

export default QRCodeGenerator;

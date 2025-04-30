import { Toolbar } from "@/components/pharmacy-ui/toolbar";
import { HandPlatter } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { DepositCard } from "./deposit-card";
import { Pagination } from "@/components/general-ui/pagination";
import { useQuery } from "@tanstack/react-query";
import { getDeposities } from "@/api/get-deposities";
import { getProfile } from "@/api/get-profile";
import { Skeleton } from "@/components/ui/skeleton";

export function Deposits() {
	const { data: profile } = useQuery({
		queryKey: ["profile"],
		queryFn: getProfile,
	});

	const {
		data: deposits,
		error,
		isLoading,
	} = useQuery({
		queryKey: [
			"deposits",
			{
				latitude: profile?.geolocalizacao_entidade?.latitude || 0,
				longitude: profile?.geolocalizacao_entidade?.longitude || 0,
			},
		],
		queryFn: async ({
			queryKey,
		}: {
			queryKey: [string, { latitude: number; longitude: number }];
		}) => {
			const [, { latitude, longitude }] = queryKey;
			console.log("Fetching deposits for:", { latitude, longitude });
			return getDeposities(latitude, longitude);
		},
		enabled: !!profile && !!profile.geolocalizacao_entidade,
	});

	if (isLoading) console.log("Loading deposits...");
	if (error) console.error("Query error:", error);

	return (
		<>
			<Helmet title='Depósitos' />

			<div>
				<Toolbar
					children={<HandPlatter className='text-emerald-700 h-6 w-6' />}
					legend='Depósitos'
				/>

				<div className='py-6 flex-col justify-between  max-xl:h-[52rem] max-sm:h-[40rem] overflow-y-scroll max-sm:grid-cols-1 max-xl:py-8 grid grid-cols-4 gap-4 max-xl:grid-cols-2'>
					{deposits
						? deposits.response.map((deposit) => {
								return <DepositCard deposit={deposit} />;
						  })
						: Array.from({ length: 6 }).map(() => {
								return (
									<div className='bg-white border h-72 p-6 flex flex-col justify-between gap-4 rounded-2xl border-gray-200 shadow-sm'>
										<div className='flex items-start gap-4'>
											<div className='relative'>
												<Skeleton className='w-8 h-8 rounded-full' />
												<div className='absolute -bottom-2 -left-2 bg-gray-200 p-1 rounded-full border-2 border-white'>
													<Skeleton className='h-3 w-3 rounded-full' />
												</div>

												<div className='flex-1 space-y-2'>
													<Skeleton className='h-6 w-[150px]' />
													<div className='flex items-center gap-1.5'>
														<Skeleton className='h-4 w-4 rounded-full' />
														<Skeleton className='h-4 w-[100px]' />
													</div>
												</div>
											</div>

											<div className='grid grid-cols-2 gap-3 mt-2'>
												<div className='space-y-2'>
													<Skeleton className='h-4 w-[60px]' />
													<Skeleton className='h-6 w-[180px]' />{" "}
												</div>
											</div>

											<div className='mt-2 flex items-center justify-center gap-2 border py-3 rounded-xl'>
												<Skeleton className='h-4 w-4 rounded-full' />{" "}
												<Skeleton className='h-5 w-[100px]' />{" "}
											</div>
										</div>
									</div>
								);
						  })}
				</div>

				<Pagination
					currentPage={1}
					totalItem={20}
					legend='Depósitos'
					perPage={3}
				/>
			</div>
		</>
	);
}

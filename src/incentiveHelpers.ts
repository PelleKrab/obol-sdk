import { type ProviderType, type SignerType, type ETH_ADDRESS } from './types';
import { Contract } from 'ethers';
import { MerkleDistributorABI } from './abi/MerkleDistributorWithDeadline';
import { getProvider } from './utils';

export const claimIncentivesFromMerkleDistributor = async (incentivesData: {
  signer: SignerType;
  contractAddress: ETH_ADDRESS;
  index: number;
  operatorAddress: ETH_ADDRESS;
  amount: string;
  merkleProof: string[];
}): Promise<{ txHash: string }> => {
  try {
    const contract = new Contract(
      incentivesData.contractAddress,
      MerkleDistributorABI.abi,
      incentivesData.signer,
    );

    const tx = await contract.claim(
      BigInt(incentivesData.index),
      incentivesData.operatorAddress,
      BigInt(incentivesData.amount),
      incentivesData.merkleProof,
    );

    const receipt = await tx.wait();

    return { txHash: receipt.hash };
  } catch (error: any) {
    console.log('Error claiming incentives:', error);
    throw new Error(`Failed to claim incentives: ${error.message}`);
  }
};

export const isClaimedFromMerkleDistributor = async (
  chainId: number,
  contractAddress: ETH_ADDRESS,
  index: number,
  provider: ProviderType | undefined | null,
): Promise<boolean> => {
  try {
    const clientProvider = provider ?? getProvider(chainId);

    const contract = new Contract(
      contractAddress,
      MerkleDistributorABI.abi,
      clientProvider,
    );

    const claimed = await contract.isClaimed(BigInt(index));

    return claimed;
  } catch (error: any) {
    console.log('Error checking claim status:', error);
    throw new Error(`Failed to check claim status: ${error.message}`);
  }
};

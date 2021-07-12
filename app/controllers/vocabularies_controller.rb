class VocabulariesController < ApplicationController
  before_action :set_vocabulary, only: %i[show update destroy]

  # GET /vocabularies
  def index
    # @vocabularies = Vocabulary.all
    @vocabularies = current_user.vocabularies.where('word like ? or translate like ?', "%#{params[:search]}%",
                                                    "%#{params[:search]}%").order(id: :DESC)
    render json: @vocabularies
  end

  # GET /vocabularies/1
  def show
    render json: @vocabulary
  end

  # POST /vocabularies
  def create
    @vocabulary = current_user.vocabularies.new(vocabulary_params)

    if @vocabulary.save
      render json: @vocabulary, status: :created, location: @vocabulary
    else
      render json: @vocabulary.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /vocabularies/1
  def update
    if @vocabulary.update(vocabulary_params)
      render json: @vocabulary
    else
      render json: @vocabulary.errors, status: :unprocessable_entity
    end
  end

  # DELETE /vocabularies/1
  def destroy
    @vocabulary.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_vocabulary
    @vocabulary = current_user.vocabularies.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def vocabulary_params
    params.require(:vocabulary).permit(:word, :vocalize, :translate, :example)
  end
end
